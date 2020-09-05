import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from "react-router-dom"

function Shop() {

    const [items,setItems]=useState([])

    const fetchItems= async ()=>{
        const data=await fetch("https://jsonplaceholder.typicode.com/photos");
        const items=await data.json();
        console.log(items)
        setItems(items)
    }

    useEffect(()=>{
        fetchItems();
    },[])

    const shopStyle={
        textAlign:"center"
    }

  return (
    <div style={shopStyle}>
     {items.map(item=>(
         <h1 key={item.id}>
             <Link to={`/shop/${item.id}`}>{item.title.slice(0,5)}</Link></h1>
         
     ))}
    </div>
  );
}

export default Shop;
