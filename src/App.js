import React from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Qualifications from "./Components/Qualifiactions";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contacts";
const App=()=>{
   return (
    <div>
        <Navbar/>
        <About />
        <Qualifications/>
        <Projects/>
        <Skills/>
        <Contact/>
    </div>
   )
}

export default App;