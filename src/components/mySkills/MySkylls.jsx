import React from "react";
import "./mySkills.scss";
import {
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaSass,
  FaReact,
  FaGitAlt,
  FaFigma,
} from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { LuFileJson2 } from "react-icons/lu";
import myIcons from "../../jsons/mySkills.json";

const MySkylls = () => {
  const getIcon = (icon) => {
    switch (icon) {
      case "FaHtml5":
        return <FaHtml5 />;
      case "FaCss3":
        return <FaCss3 />;
      case "FaBootstrap":
        return <FaBootstrap />;
      case "FaSass":
        return <FaSass />;
      case "SiJavascript":
        return <SiJavascript />;
      case "FaReact":
        return <FaReact />;
      case "FaGitAlt":
        return <FaGitAlt />;
      case "FaFigma":
        return <FaFigma />;
      case "LuFileJson2":
        return <LuFileJson2 />;
      default:
        return null;
    }
  };

  return (
    <div className="my_skills_conteiner">
      <div>
        <h1>
          <span className="mySkills_span_1"> My </span>
          <span className="mySkills_span_2"> Skills</span>
        </h1>
      </div>
      <div className="my_icons">
        {myIcons.map((data) => (
          <div className="my_icons_box" key={data.name}>
            {getIcon(data.icon)}
            <p>{data.name} </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySkylls;
