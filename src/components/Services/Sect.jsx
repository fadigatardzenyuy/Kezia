import React from "react";
import "./Sect.css"

import Button from "../Button/Button";


function Sect (){

    return(
    <section>
      <div className="head">
  <h4>Comprehensive Career
Assessment Service for Individuals</h4>

<p className="p">Our Career Assessment service provides individuals with a detailed analysis of their sill, interests, and goals, helping them make informed decisions about their career path</p>
</div>


<div className="text-flex">
  <div className="text">
  <h2>Why Choose Our Career
Assessment Service</h2>
  <p>Accurate and personalized assessment tailored to your unique strengths and aspirations.</p>
  </div>

  <div className="text">
  <h2>Expert Guidance and
Actionable Insights</h2>
  <p>Our experienced career counselors provide valuable guidance and actionable insights to help you make the most of your assessment results..</p>
  </div>
  <div className="text">
  <h2>Unlock Your Full Potential</h2>
  <p>Discover new career paths and opportunities that align
With your skil interests and asirations.</p>
  </div>
</div>
       <div className="btn1">
    <Button SignIn ="Sign up" />
       </div>

</section>
    )
}


export default Sect;