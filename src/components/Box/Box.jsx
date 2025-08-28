import React from "react";
import"./Box.css"
import Button from "../Button/Button";


function Box(){
    return(
 <section  className="info">

    <div className="info1">
        <h1>Unlock Your Full Potential
with Career Counseling</h1>
<p>At our career counseling platform, we are dedicated to helping individuals discover their true potential and achieve their professional goal. Our mission to provide comprehensive guidance and resources to support your career development journey.</p>


 <div className="info-btn">
    <Button SignIn ="Get" />
    </div>

    </div>
    <div className="image1">
<img src="./Assets/image/quote.jpg" alt="" />

</div>


{/* <div className="box2">

    <div className="image1">
<img src="./Assets/image/quote.jpg" alt="" />

</div>

    <div className="info2">
        <h1>Unlock Your Full Potential
with Career Counseling</h1>
<p>At our career counseling platform, we are dedicated to helping individuals discover their true potential and achieve their professional goal. Our mission to provide comprehensive guidance and resources to support your career development journey.</p>


    </div>
</div> */}





 </section>

    )
}

export default Box;

// import "./App.css";
// import Homepage from "./pages/homepage";

// function App(){
//   <Homepage/>
// }

// export default App;

// import Header from './components/homepage/homepage'


// function Homepage() {
//   return (
//     <div className="App">
//       <Header />
//      <Hero />
//      <Box />
//     </div>
//   );
// }
// export default Homepage;