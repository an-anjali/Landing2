import React from "react";
import Header from "./Components/Header";
import Feature from "./Components/Feature";
import About from "./Components/About";
import aboutimage from "./images/Frame 19.png";
import aboutimage1 from "./images/download.png";
import Presentation from "./Components/Presentation";
import Contact from "./Components/Contact";
function App() {
    return (

        <div className="App">
            <Header></Header>
            <Feature></Feature>
            <About image={aboutimage} title="Come wih us we will grow togther" button="Get App"></About>
           <Presentation></Presentation>
            <About image={aboutimage1} title="Come wih us we will grow togther" button="Get App"></About>
            <Contact></Contact>
        </div>
    );
}

export default App;