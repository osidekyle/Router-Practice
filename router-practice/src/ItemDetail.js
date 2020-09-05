import React, {useState, useEffect} from 'react';
import './App.css';
import {Link} from "react-router-dom"

function ItemDetail({match}) {

    const [item,setItem]=useState({})

    const fetchItem= async ()=>{
      const fetchItem=await fetch(`https://jsonplaceholder.typicode.com/photos/${match.params.id}`)
      const item=await fetchItem.json()
      setItem(item)
    }


    useEffect(()=>{
        fetchItem()
    },[])


    const itemStyle={
        textAlign:"center"
    }
    const imageStyle={
        height:"auto",
        maxWidth:"100%"
    }

  return (
    <div style={itemStyle}>
    <h1>{item.title}</h1>
    <img style={imageStyle} src={item.url}></img>
    </div>
  );
}

export default ItemDetail;
