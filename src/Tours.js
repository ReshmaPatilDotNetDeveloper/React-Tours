import React from 'react'
import Tour from './Tour'

function Tours({toursdata,removeTour}) {
    debugger;
  return (
    <div>
      {
        toursdata.map((m)=>{
            return(
                <Tour key={m.id} {...m} removeTour={removeTour}/>
            )
        })
      }
    </div>
  )
}

export default Tours
