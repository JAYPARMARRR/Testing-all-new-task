import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"

import Home from "./Components/home";
import About from "./Components/about";
import Services from "./Components/Services";
import Contact from "./Components/Contact";





function App() {

const contacts = [
   {
    id:"1",
    "name": "Jayu",
    "email": "jaykumarvinodbhi@gmail.com  "
   } ,  


   {
    id:"2",
    "name": "Sohil",
    "email": "sohilkazi@gmail.com  "
   } ,  


]
 
  return (
    <>

   


 <nav>
      <ul>
        <li><a href="/" >Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>




      <BrowserRouter>
    <Routes>
          <Route  path="/" element= {  <Home/>}/>
          <Route  path="/about" element= {<About/>}/>
          <Route  path="/services" element= {<Services/>}/>
          <Route  path="/contact" element= {<Contact/>}/>
        </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;
