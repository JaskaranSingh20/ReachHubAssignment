import { useEffect, useState } from 'react'
import './App.css'
import Cards from './Components/Cards';

function App() {
  const [name, setName] = useState("");
  const [data , setData] = useState([]);   // to store the data

  const refresh = async (pg) =>{

    /* Getting data from API */

    const dt = await fetch(`https://api.punkapi.com/v2/beers?page=1&per_page=12`);
    const res = await dt.json();
    setData(res);
  }

  useEffect(()=>{
    refresh();    // to show some data initially
  }, [])

  const handleChange = (e)=>{
    // console.log(" HandleChange " + e.target.value);
    setName(e.target.value);
  }

  const handleSubmit =  async () =>{

    if(name != '' ){    // checking if input is null or not based on user input

      /* Getting data from API - Search by Name */

      const  dt = await fetch(`https://api.punkapi.com/v2/beers?beer_name=${name}`);
      const  res = await dt.json();
      setData(res);
    }else{
      setData([]);
    }

  }

  return (
    <>
      <p className='searchdiv' >
        <input type='text' placeholder='Search Name' value={name}  onChange={handleChange}/>
        <button onClick={handleSubmit}>Search</button>
      </p>
      {data.length ? (
          <div className='container'>
            {data.map((dt, index)=>{
              return <Cards data = {dt} id={dt.id} key={index}/>
            })}
          </div>
      ) : <p>Please enter valid name</p>}
    </>
  )
}

export default App
