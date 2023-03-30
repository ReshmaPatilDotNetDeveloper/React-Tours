import React, { useState } from 'react'

function Tour({id, image, info, name, price, removeTour}) {
    const[showMore,setShowMore] = useState(false);
  return (
    <article className='single-tour'>
        {/* <img src={image} alt={name}/> */}
        <footer>
            <div className='tour-info'>
                <h4>{name}</h4>
                <h4 className="tour-price">${price}</h4>
            </div>
            <p>
                {showMore ? info : info.substring(0,200)}
                <button onClick={()=>setShowMore(!showMore)}>
                    {showMore ? 'Show Less':'Show More'}
                </button>
            </p>
        </footer>
        <button className='btn-delete' onClick={()=>removeTour(id)}>Not Interested</button>
    </article>
  )
}

export default Tour
