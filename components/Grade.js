import React, {useState} from "react";
import Layout from "../containers/Layout";
export default function Grade(){
    const[kor, setKor] = useState()
    const[eng, setEng] = useState()
    const[math,setMath] = useState()
    const[total,setTotal] = useState()
    const sum =()=>{
        let kor = document.getElementById('kor').value
        let eng = document.getElementById('eng').value
        let math = document.getElementById('math').value
        setKor(kor)
        setEng(eng)
        setMath(math)
        setTotal(Number(kor) + Number(eng) + Number(math))
    }
    return<Layout><h1>성적표</h1>
    <div>
        <span></span>
    </div>
    <div>
        <label htmlFor=""><b>kor</b></label><br />
        <input id ="kor" type =""/><br/>
        <label htmlFor=""><b>eng</b></label><br />
        <input id ="eng" type =""/><br/>
        <label htmlFor=""><b>math</b></label><br />
        <input id ="math" type =""/><br/>
        <label htmlFor=""><b>total</b></label><br />
        <input id ="text" type =""/><br/>

        <button onClick={()=>{sum()}}>총점 구하기</button>
        <div>총점: {kor} + {eng} + {math} = {total}</div>
    </div>
    </Layout>
}