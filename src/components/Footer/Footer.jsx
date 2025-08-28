import React from "react";
import "./Footer.css"


function Footer(){

    return(

     <div className="footer">
        
           <div className="logo1">
            
    <h1><img src="./Assets/image/h1.png" alt="" /> </h1>
        {/* <span>Counselling</span> */}
        </div>
      <div className="side-footer">
      <div className="footer-info">
        <h2>Services</h2>
        <p>Career Assessment</p>
        <p>Career Coaching</p>

      </div>
      </div>

      <div className="side-footer">
      <div className="footer-info">
        <h2>Resources</h2>
        <p>GCE Questions</p>
        
      </div>
      </div>

      <div className="side-footer">
      <div className="footer-info">
        <h2>Site Info</h2>
        <p>About us</p>
      
      </div>
      </div>
      <div className="icons">
         <img src="./Assets/image/Logo twitter 6.png" alt="" />
         <img src="./Assets/image/Logo facebook 1.png" alt="" />
         <img src="./Assets/image/Logo linkedin 1.png" alt="" />
         <img src="./Assets/image/Logo youtube 1.png" alt="" />

         {/* <p className="copyright">© 2022 CareerCounsellor</p> */}

      </div>


{/* position: absolute;
width: 1440px;
height: 1001px;
left: 0px;
top: 1596px;

background: #F6F1F1; */}

     </div>

    )
}


export default Footer;