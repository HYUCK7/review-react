import axios from 'axios';
const SERVER = `http://localhost:8080`
export const memberBmi = bmiRequest => axios.post(`${SERVER}/member/bmi`, bmiRequest)
