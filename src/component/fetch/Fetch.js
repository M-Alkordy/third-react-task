import React from 'react'
import { useState, useEffect } from 'react'

function Fetch(props) {
  const url =`https://fakestoreapi.com/products/${props.id}`;
  const body ={
    category: "{props.category}",
description: "{props.description}",
image: "{props.image}",
price: "{props.price}",
  }
  const GetDataFromApi =() =>{
    let x=props.m;
    fetch(url,{
      method:x,
      if (x) {
        body:JSON.stringify(body)
      }

    })
    .then(rec => rec.json())
    .then(data => console.log(data))
    .catch(error =>console.log(error));
  }

  useEffect(() => {
    GetDataFromApi()}, [])
  
  return (
    <div>{props.children}</div>
  )
}

export default Fetch
