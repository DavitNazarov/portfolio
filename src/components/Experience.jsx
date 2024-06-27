import { useEffect, useState } from "react";
import Typical from "react-typical";
import "./experience.css";

function Experience() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/json/experiance.json")
      .then((response) => response.json())
      .then((data) => setSkills(data))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  return (
    <section>
      <div className="mt-60 exp_with">
        <h1 className=" text-4xl font-mono text-red-300">EXPERIENCE WITH:</h1>
        <h1 className=" text-4xl font-mono text-red-400 -z-50 pl-2">
          <Typical
            loop={Infinity}
            steps={[
              " Html",
              2500,
              " Css",
              2500,
              " Scss",
              2500,
              " JavaScript",
              2500,
              " TypeScript",
              2500,
              "React",
              2500,
              " Node",
              2500,
              " Mongo DB",
              2500,
              " Express ",
              2500,
            ]}
          />
        </h1>
      </div>

      <div className="exp_skills flex justify-center items-center mt-10 p-14">
        {skills.map((skill, index) => (
          <div key={index} className="p-9">
            <div className="flex justify-center p-9 flex-col items-center hover:border-[1px] transition ease-in-out duration-150 cursor-pointer">
              <img
                width="130px"
                src={`/svg/${skill.skill_img}.svg`}
                alt={skill.skill}
              />
              <p>{skill.skill} </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
