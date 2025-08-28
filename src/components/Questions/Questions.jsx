import React from "react";
import "./Questions.css"
import Button from "../Button/Button";

function Questions(){
    return(

    <section className="faqs"> 

    <div className="right-faqs">
        <h1>FAQS</h1>
        <p>Find answers to common questions about our career counseling services.</p>
    
    < div className="faqs-btn">
        <Button SignIn ="Contact" />
    </div>
   </div>

    <div className="left-faqs">
        <div className="faqs-info">
        <p className="head"><strong>What services do you offer?</strong></p>
        <p className="text">We offer a range of services including career assessment,career coaching, and Self discovery services</p>
       </div>
    </div>
            <div className="faqs-info">
        <p className="head"><strong>How can I contact you?</strong></p>
        <p className="text">You can contat us by filing out the contact form on our websire or by using the contact information provided.</p>
       </div>
        <div className="faqs-info">
        <p className="head"><strong>Do you offer caree coaching?</strong></p>
        <p className="text">Yes, we offer career coaching services to help individuals navigate their career paths and achieve their professional goals.</p>
       </div>
     <div className="faqs-info">
        <p className="head"><strong>What resources do you provide?</strong></p>
        <p className="text">We provide resources like GCE questions and external tools to support career development.</p>
       </div>
        {/* <div className="faqs-info">
        <p className="head"><strong>What services do you offer?</strong></p>
        <p className="text">We offer a range of services including career assessment,career coaching, and Self discovery services</p>
       </div> */}
     
    </section>
    )
}

export default Questions;