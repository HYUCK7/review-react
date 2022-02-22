import React,{useState} from "react";
import Layout from "../containers/Layout";
export default function Login(){
    const[id, setId]=useState("")
    const[pw, setPw]=useState("")
    const res =()=>{
        let id = document.getElementById("id").value
        let pw = document.getElementById("pw").value
        setId(id)
        setPw(pw)
    }
    return <Layout><h1>로그인</h1>
    <div>
        <span></span>
    </div>
    <div>
        <label htmlFor=""><b>id</b></label>
        <input id = "id" type =""/><br/>
        <label htmlFor=""><b>pw</b></label>
        <input pw = "pw" type =""/><br/>
        <button onClick={()=>{res()}}>Login</button><br/>
        <div>로그인 결과 : {id}  {pw}</div>

        <label htmlFor="">
        <input type= "text"/>
        </label>
    </div>
    <div>
        <button>cancel</button>
        <span>Forgot <a href="">password?</a><br/>
        </span>
    </div>
    </Layout>
}