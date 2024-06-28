const Home = () => {
  return (
    <div className="container pt-28 flex flex-col justify-center items-center">
      <div>
        <img src="/svg/avatar.svg" alt="avatar" />
      </div>
      <div>
        <h1 className="text-4xl text-center font-serif font-bold pt-9 -z-50">
          me
        </h1>
        <div className="flex content-center">
          <p className="pt-9 text-lg text-center p-9 ">
            Hello, my name is Davit Nazarov. I am 17 years old and a web <br />
            developer. <br /> <br /> I have one year of experience in front-end
            development and <br />I am learning back-end development with
            Node.js. I am also studying <br />
            the MERN stack (MongoDB, Express, React, Node.js).
            <br /> <br /> I have worked on different projects, making websites
            that are dynamic and easy to use. <br />I love technology and always
            try to learn new things. <br /> <br /> I want to use my skills and
            passion to help a company create great projects. Thank you <br />
            for visiting my portfolio. I look forward to talking with you.{" "}
            <br />
          </p>
        </div>
        <div className="text-center flex mt-7 justify-evenly font-semibold">
          <button className="p-4 w-30 text-black border-[0.1rem] rounded-full bg-white text-lg  hover:bg-neutral-900 hover:text-white transition ease-in-out duration-500">
            Get In Touch
          </button>

          <button className="p-4 w-30 text-white border-[0.1rem] rounded-full text-lg  border-white hover:bg-white hover:text-neutral-900 transition ease-in-out duration-500">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
