import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "./pages/Home"
import Bmi from "./components/Bmi"
import Calc from "./components/Calc"
import Counter from './components/Counter'
import Login from './components/Login'
import Grade from './components/Grade'

export default function App (){
    return useRoutes([
        {path: "/", element:<Home/>},
        {path: "bmi", element:<Bmi/>},
        {path: "calc", element:<Calc/>},
        {path: "counter", element:<Counter/>},
        {path: "login", element:<Login/>},
        {path: "grade", element:<Grade/>}
    ])
}