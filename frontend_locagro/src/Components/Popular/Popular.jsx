import React, { useEffect, useState } from 'react';
import './Popular.css';
import Item from '../Item/Item';

const Popular = () => {

  const [popularProducts,setPopularProducts]=useState([]);
  useEffect(()=>{
    fetch(`${process.env.REACT_APP_BACKEND_URL}/popular`)
    .then((response)=>response.json())
    .then((data)=>setPopularProducts(data));
  },[])
  
  return (
    <div className="popular">
        <h1>POPULAR IN BUYING</h1>
        <hr />
        <div className="popular-item">
            {popularProducts.map((item,i)=>{
                return<Item key={i} id={item.id} name={item.name} image={item.image}
                new_price={item.new_price} old_price={item.old_price}/>
            })}
        </div>
    </div>
  )
}

export default Popular