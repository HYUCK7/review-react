import React, { useState } from "react";
import Layout from "../containers/Layout";

export default function Bmi(){
    const[name,setName] = useState()
    const[length,setLength] = useState()
    const[weight,setWeight] = useState()
    const sum=()=>{
        let name = document.getElementById('name').value
        let length = document.getElementById('length').value
        let weight = document.getElementById('weight').value
        setName(name)
        setLength(length)
        setWeight(weight)
    }
    return <Layout><h1>BMI</h1>
    <div>
        <span>
            </span></div>
            <div>
                <label htmlFor=""><b>name</b></label>
                <input id ="name" type =""/><br/>
                <label htmlFor=""><b>length</b></label>
                <input id ="length" type=""/><br/>
                <label htmlFor=""><b>weight</b></label>
                <input id = "weight" type=""></input>

                <button onClick={()=>{}}>이름</button>
                <button onClick={()=>{}}>키</button>
                <button onClick={()=>{}}>몸무게</button>
                <button onClick={()=>{sum()}}>결과 출력</button>
                <div>결과 : {name}, {length}, {weight}</div>
                </div>
                </Layout>

    
}