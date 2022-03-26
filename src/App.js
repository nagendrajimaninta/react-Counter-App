import React,{useState,useEffect} from "react";
import "./style.css";

export default function App() {
const [list,seList] = useState(0);
var inc =()=>{
  seList(list+1)
};
var dec =()=>{
  seList(list-1)
};
console.log(list);
  return (
    <div>
      <h2>Count : {list}</h2>
      <button onClick={inc}><img style={{heighe:'70px',width:"70px",backGroundcolor:"green"}}
      src='https://d3dyfaf3iutrxo.cloudfront.net/thumbnail/user/88121fdd75a042cca50603f28e680750.jpeg'/></button> &nbsp;&nbsp;
      <button onClick={dec}><img style={{heighe:'70px',width:"70px"}}
      src='https://d3dyfaf3iutrxo.cloudfront.net/thumbnail/user/88121fdd75a042cca50603f28e680750.jpeg'/></button>
      <h1 style={{color:'green'}}>Practiceing Api's</h1>
      <p>This is the example for the <span style={{color:'green'}}> <b><strike>api's :)</strike></b></span></p>
    </div>
  );
}
