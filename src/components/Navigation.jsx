import navLinks from "@/constants/navLinks";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./nav.css";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSlidebar, setShowSlidebar] = useState(true);

  const toggleSlidebar = () => {
    setShowSlidebar(!showSlidebar);
  };
  const closeSlidebar = () => {
    setShowSlidebar(false);
  };

  return (
    <nav>
      <div
        className={` ${
          showSlidebar ? "hidden" : "flex"
        } xl:flex lg:flex md:hidden sm:hidden  flex-col justify-between p-4
        text-white bg-black w-[4%] hover:w-[15%] h-[100vh] fixed  `}
        id="navigation-container"
      >
        <div className="flex flex-col justify-center space-y-4">
          <ul>
            {navLinks.map((data) => (
              <Link
                to={data.Path}
                key={data.PageName}
                className="flex items-center transition-transform transform hover:translate-x-2"
              >
                <li className="hidden nav-item-name mt-[3rem]">
                  {data.PageName}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
