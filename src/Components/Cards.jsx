import React from 'react'

function Cards({data}) {

    let descp = data.description;
    
    if(data.description.length > 90){   // to truncate the description 
        descp = descp.slice(0, 90);
        descp += '...';
    }

  return (
    <div className='card'>
        <img src={data.image_url} />
        <div>
            <h2>{data.name}</h2>
            <h5>{data.tagline}</h5>
            <p>{descp}</p>
        </div>
    </div>
  )
}

export default Cards