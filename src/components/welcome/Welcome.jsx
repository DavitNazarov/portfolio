import React from "react";
import banner from "../../assets/Banner.svg";
import "./welcome.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import link from "../../jsons/welcomeLinks.json";

const Welcome = () => {
  const getIcon = (icon) => {
    switch (icon) {
      case "FaLinkedin":
        return (
          <FaLinkedin
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/davit-nazarov-2973872a3/"
              )
            }
          />
        );
      case "FaGithub":
        return (
          <FaGithub
            onClick={() => window.open("https://github.com/goofi1Dev")}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div>
      <div className="banner">
        <div className="banner_image">
          <img src={banner} alt="banner" />
        </div>
        <div className="banner_welcome">
          <div>
            <span className="banner_span_1"> Hello I’am </span>
            <span className="banner_span_2">Davit Nazarov.</span>
            <br />
            <span className="banner_span_2">Frontend </span>
            <span className="banner_span_3">
              <a href="/">Developer</a>
            </span>
            <br />
            <span className="banner_span_1">Based In </span>
            <span className="banner_span_2">Georgia</span>
          </div>
          <p>
            Davit Nazarov, a Front-End Developer, paints digital canvases with
            precision. <br /> Armed with a palette of HTML, CSS, and JavaScript,
            Davit crafts seamless user experiences. <br /> His code is a
            symphony, translating ideas into visually stunning websites. <br />A
            maestro of the virtual realm, Davit Nazarov is the architect of
            intuitive and engaging online spaces.
          </p>
          <div className="links_icon_conteiner">
            {link.map((links) => (
              <div className="links_icon" key={links.icon}>
                {getIcon(links.icon)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
