import React from "react";
import sudha from "../../src/sudha.jpg"

const About = () => {
 return ( <div className="aboutme">
    <h1>
        About Me
    </h1>
    <div id="img-a">
        <img src={sudha}>
            </img>
    </div>
    <p>
      Hi everyone! My name is Sudhakar. I'm a 26-year-old single M.Tech in
      Physics student at IIT Madras. I previously completed my M.Sc and B.Sc in
      Physics at different colleges in Hyderabad. Though I've tried my luck with
      several wonderful women during my M.Sc and B.Sc, things haven't worked
      out. Filled with hope, I entered IIT Madras after cracking the GATE exam,
      believing I might find my dream girl here. Unfortunately, it seems many
      students here are already in relationships. While it's disappointing, I
      haven't given up hope on finding a partner. I'm open to connecting with
      someone who shares my interests and values. If you're interested in
      learning more about me, please feel free to contact me. You can also check
      out my portfolio for a more comprehensive picture of who I am.
    </p>
  </div>)
};

export default About;
