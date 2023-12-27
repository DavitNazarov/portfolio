import React from "react";
import group from "../../assets/Group.svg";
import "./about.scss";

const About = () => {
  return (
    <section className="about_me_section">
      <div>
        <h1>
          <span>About </span>
          <span> Me</span>
        </h1>
      </div>
      <div className="about_me_conteiner">
        <div className="about_me_image">
          <img src={group} alt="group svg" />
        </div>
        <div className="about_me_text">
          <p>
            As a junior Front-End Developer entering the dynamic field of web
            development, I am Davit Nazarov. Proficient in HTML, CSS, SCSS,
            JavaScript, and React, I weave intricate digital experiences that
            marry functionality with aesthetics.
            <br />
            <br />
            In the coming year, I am poised to extend my expertise into back-end
            development, with a dedicated focus on Node.js.
            <br />
            <br />
            My journey is a tapestry of coding languages and design principles,
            each line of code a brushstroke in creating immersive online
            landscapes. The transition to Node.js marks a strategic evolution in
            my skill set, aimed at providing end-to-end solutions and a deeper
            understanding of web development.
            <br />
            <br />
            In my pursuit of a Front-End Developer role, I bring not just
            technical proficiency but a passion for user-centric design. Eager
            to contribute my skills to innovative teams, I am on the lookout for
            a role that fosters growth and challenges my capabilities.
            <br />
            <br />
            The fusion of my current front-end prowess and the impending foray
            into back-end development encapsulates my commitment to becoming a
            versatile and impactful developer in the ever-evolving digital
            sphere. Davit Nazarov, a name synonymous with creativity, coding,
            and a dedication to continuous learning.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
