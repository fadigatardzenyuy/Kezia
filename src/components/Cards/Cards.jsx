import React from "react";
import "./Cards.css"
import Button from "../Button/Button";


function Cards(){

    return(
<section>
            <div className="first">
        <h1>Discover Career Insights Today</h1>
    <p className="update">Stay updated with our latest career advice and industy insights.</p>
    </div>
<div className="card">
    
    <div className="grid-card">
        <div className="grid">
            <div className="img">
                <img src="./Assets/image/quote.jpg" alt="" />
                <h2>Unlock Your Potential with Career Coaching</h2>
                <p className="coach">Discover the benefits of career coaching and how it can help you succeed.</p>
            </div>
        </div>
    </div>

    <div className="grid-card">
        <div className="grid">
            <div className="img">
                <img src="./Assets/image/confused.jpg" alt="" />
                <h2>Discover Yourself</h2> <br /> 
                <p className="coach">Discover who you are, and move in the right career path for success.</p> 
            </div>
        </div>
    </div>

    <div className="grid-card">
        <div className="grid">
            <div className="img">
                <img src="./Assets/image/books.jpg" alt="" />
                <h2>Walk in the right direction in achieving your dreams</h2> <br />
                <p className="coach">Discover the of benefits studying and becoming great.</p>
            </div>
        </div>
      
    </div>
   
</div>
 < div className="card-btn">
    <Button SignIn ="veiw all" />
    </div>


    <div className="section2">
      <div className="unlock">
                <h3>Unlock Your Career
      Potential Today</h3>
      <p>Discover the path to your dream career with our comprehensive carer counseling services.</p>
      
      </div>
 < div className="card-btn">
    <Button SignIn ="Sign Up" />
    </div>
    </div>


</section>
    )
}

export default Cards;