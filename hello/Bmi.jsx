import React from "react";
const Bmi = () =>{
    return<><h1>BMIAPP</h1>
    <form>
        <div>
            <span></span>
            <img src="" alt="" />
        </div>
        <div>
            <label htmlFor=""><b>Length</b></label><br />
            <input type="text" /><br />
            <label htmlFor=""><b>Weight</b></label><br />
            <input type="text" /><br />
            <button>BMI구하기</button><br /><br />
            <label htmlFor="">result</label><br />
            <input type="text" />
        </div>
    </form>
    </>
}
export default Bmi