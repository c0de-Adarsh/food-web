
import About from "./About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import OurFood from "./Components/OurFood";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./SignIn";
import { useState } from "react";

//
export default function App() {
  const [count , setCount] = useState(0);

  const handleAdd = () =>{
    setCount(count+1)
  }
  return (
    <>
   
      <BrowserRouter>
      <Header count={count}/>
      <Routes>
        <Route path="/" element={<Home handleAdd={handleAdd}/>}/>
        <Route path="/about" element={<About/>}/>
         
        <Route path="/ourfood" element={<OurFood/>}/>
        <Route path="/signin" element={<SignIn/>}/>
       
      </Routes>
      <Footer />
      </BrowserRouter>
     

    </>
  )
}
