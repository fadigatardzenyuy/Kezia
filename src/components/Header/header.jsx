import React from "react";
import "./header.css";
import Button from "../Button/Button";



function Head({SignIn}){
return <header className="navbar">
    <div className="logo">
    <h1><img src="./Assets/image/h1.png" alt="" />  </h1>
        {/* <span>Counselling</span> */}
        </div>
   <div className="nav-links">

            <li><a href="home">Home</a></li>
            <li><a href="services">Services</a></li>
            <li><a href="">Resources</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact Us</a></li>
            {/* <link to ="/Contact Us" /> */}

             
   </div>

   <div className="nav-btn">
    <Button SignIn ="SignIn" />
    </div>

     </header>

}

export default Head;