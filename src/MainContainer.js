import React, { useEffect, useState } from 'react'
import Tours from './Tours'
import apiUrl from './ConstApi';
import Loading from './Loading';

function MainContainer() {
  const[loading,setLoading] = useState(true);
  const[data,setData] = useState([]);
  
  useEffect(()=>{
    fetchData();
  },[])

  const removeTour =(id) =>{
    const finalData = data.filter(x=>x.id!=id);
    setData(finalData);
  }
  const fetchData = async ()=>{
    setLoading(true);
    const response = await fetch('https://course-api.com/react-tours-project');
    const result =await response.json();
    setData(result);
    console.log(result);
    setLoading(false);
   }
   if(loading){
    return(
        <div>
            <Loading/>
        </div>
    )
   }
   if(data.length == 0){
    return(
        <div>
            <h4>No Records</h4>
            <button className='btn' onClick={fetchData}>Refresh</button>
        </div>
    )
   }
  return (
    <div>
        <div className="title">
            <h2>our tours</h2>
            <div className="underline"></div>
        </div>
        <Tours toursdata={data} removeTour={removeTour}/>
    </div>
  )
}

export default MainContainer
