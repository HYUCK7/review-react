import React, {useState} from "react";
import { memberBmi } from "../api";
import Layout from "../containers/Layout";
export default function Bmi(){
    const[inputs, setInputs] = useState({})
    const{name, weight, height} = inputs

    const handleChange =(e)=>{
        e.preventDefault()
        const {name, value} = e.target;
        setInputs({
            ...inputs, [name] : value
        })
    }
    const handleClick=(e)=>{
        e.preventDefault()
        const bmiRequest = {name, weight, height}
        console.log(`username: ${JSON.stringify(bmiRequest)}`)
        memberBmi(bmiRequest)
        .then(res =>{
            alert(res.data)
        })
        .catch(err=>console.log(`에러발생: ${err}`))
    }
    return<Layout>
        <form>
            <h1>BMI</h1>
            <div>
                <label><b>username</b></label>
                <input type = "" name = "name" onChange={handleChange}/><br/>
                <label><b>height</b></label>
                <input type = "" name = "height" onChange={handleChange}/><br/>
                <label><b>weight</b></label>
                <input type ="" name = "weight" onChange={handleChange}/><br/>
                <button onClick={handleClick}>BMI CHECK</button>
            </div>
        </form>
    </Layout>
}

