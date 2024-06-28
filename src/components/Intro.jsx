import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Intro = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <div
      className="container pt-28 flex flex-col justify-center items-center"
      ref={ref}
    >
      <div>
        <div className="container">
          <div className="flex flex-col">
            <p
              className="text-2xl text-white"
              style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
              }}
            >
              Hello, I am
            </p>
            <h1
              className="text-5xl pt-3 text-green-500 font-semibold font-sans"
              style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
              }}
            >
              {`${"< DAVIT"}`} <br />
              {`${"NAZAROV />"}`}
            </h1>
            <h3
              className="pt-6 text-5xl font-mono"
              style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.6s",
              }}
            >
              Fullstack Developer
            </h3>
            <p
              className="text-2xl text-slate-700 pt-3"
              style={{
                transform: isInView ? "none" : "translateX(-200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s",
              }}
            >
              1 year of Experience
            </p>
          </div>
          <div>
            <img src="/svg/intro.svg" alt="intro" />
          </div>
        </div>
        <div className="text-center flex mt-7 justify-between font-semibold">
          <motion.div
            className=" box cursor-pointer p-4 w-30 text-black border-[0.1rem] rounded-full bg-white text-lg  hover:bg-neutral-900 hover:text-white"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <li className="flex items-center ">Get In Touch</li>
          </motion.div>

          <motion.div
            className="box cursor-pointer p-4 w-30 text-black border-[0.1rem] rounded-full bg-white text-lg  hover:bg-neutral-900 hover:text-white"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <li className="flex items-center ">Download CV</li>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
