import { useEffect, useState } from "react";
import Typical from "react-typical";

function Experience() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("/public/json/experiance.json")
      .then((response) => response.json())
      .then((data) => setSkills(data))
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  return (
    <section>
      <div className="flex justify-center">
        <h1 className="mt-60 text-4xl font-mono text-slate-500">
          EXPERIENCE WITH:
        </h1>
        <h1 className="mt-60 text-4xl font-mono text-slate-500 -z-50 pl-2">
          <Typical
            loop={10}
            wrapper="p"
            steps={[
              " Html",
              2000,
              " Css",
              2000,
              " Scss",
              2000,
              " JavaScript",
              2000,
              " Node",
              2000,
              " Mongo DB",
              2000,
              " Express ",
              2000,
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
                src={`/${skill.skill_img}.svg`}
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
