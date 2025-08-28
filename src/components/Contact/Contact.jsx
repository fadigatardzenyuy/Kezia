import React from "react";
import "./Contact.css"
import Button from "../Button/Button";

function Contact(){
    return(

        <div className="Tell">
            <div className="Tell-prop">
                <div className="image">
                    <img src="./Assets/image/Phone.png" alt="" />
                    <h2>Email</h2>
                    <p>For immediate inquiries and support needs</p>
                    <p className="email">mbonokezia37@gmail.com</p>
                </div>
            </div>
             <div className="Tell-prop">
                <div className="image">
                    <img src="./Assets/image/Mail.png" alt="" />
                    <h2>Email</h2>
                    <p>For immediate inquiries and support needs</p>
                    <p className="email">mbonokezia37@gmail.com</p>
                </div>
                
                <div className="below">
                <p className="exclusive">Get Exclusive Updates</p>
                <p className="sign">Sign up for an amazing expirience</p>

                </div>
        
            </div>

             <div className="Tell-prop">
                <div className="image">
                    <img src="./Assets/image/Location.png" alt="" />
                    <h2>Location</h2>
                    <p>For immediate inquiries and support needs</p>
                    <p className="email">mbonokezia37@gmail.com</p>
                </div>
                
            </div>
     

          {/* <div className="Contact-btn">
                 <Button SignIn ="veiw all" />
                 <Button SignIn ="veiw all" />
                </div> */}
            
            </div>

    )
}

export default Contact;