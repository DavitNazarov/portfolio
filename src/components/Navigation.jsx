import { useState } from "react";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar  md:flex fixed w-full justify-around p-8 z-50 ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl">MyLogo</div>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`md:flex ${
          isOpen ? "block" : "hidden"
        }  flex justify-end text-2xl `}
      >
        <ul className="md:flex md:items-center md:space-x-6">
          <li>
            <a href="#" className="block text-white py-2 md:py-0">
              ABOUT
            </a>
          </li>
          <li onClick={window.scrollTo(500, 500)}>
            <a href="#" className="block text-white py-2 md:py-0">
              EXPERIENCE
            </a>
          </li>
          <li>
            <a href="#" className="block text-white py-2 md:py-0">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="block text-white py-2 md:py-0">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
