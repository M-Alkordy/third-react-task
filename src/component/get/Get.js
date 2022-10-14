import React from 'react'

function get(props) {
  const url =`https://fakestoreapi.com/products/${props.id}`;
  const body ={
    category: "{props.category}",
description: "{props.description}",
image: "{props.image}",
price: "{props.price}",
  }
  const GetDataFromApi =() =>{
    let x=props.m;
    fetch(url)
    .then(rec => rec.json())
    .then(data => console.log(data))
    .catch(error =>console.log(error));
  }
  GetDataFromApi();
}

export default get

/* ,{
  method:"${props.method}",
  body:

} */
/* /${props.id} */