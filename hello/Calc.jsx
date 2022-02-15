import React from 'react';
const Calc =()=>{
    return<><h1>계산기</h1>
    <form>
        <div>
            <span></span>
            <img src="" alt="" />
        </div>
        <div>
            <label htmlFor=""><b>First Num</b></label><br />
            <input type="text" /><br />
            <label htmlFor=""><b>Opcode</b></label><br />
            <input type="text" /><br />
            <label htmlFor=""><b>Second Number</b></label><br />
            <input type="text" /><br />
            <button>연산</button><br />
            <input type="text" />
        </div>
    </form>
    </>
}
export default Calc