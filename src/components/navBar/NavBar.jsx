import React, { useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/logo.svg";
import "./nav.scss";
import downloadSvg from "../../assets/download.svg";
import { motion, useScroll } from "framer-motion";

const NavBar = () => {
  // to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };
  const { scrollYProgress } = useScroll();

  return (
    <>
      <Navbar>
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
        <Container fluid className="d-flex justify-content-around">
          <Navbar.Brand>
            <img src={logo} alt="logo" />
          </Navbar.Brand>
          <Nav className="gap-4">
            <Nav.Item>About Me </Nav.Item>
            <Nav.Item
              onClick={() => {
                window.scrollTo({ top: 600, left: 0, behavior: "smooth" });
              }}
            >
              Skills
            </Nav.Item>
            <Nav.Item>Project </Nav.Item>
            <Nav.Item>Contact Me </Nav.Item>
          </Nav>
          <div className="burger-menu" onClick={updateMenu}>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
            <div className={burger_class}></div>
          </div>
          <div className={menu_class}>
            <div className="burger_menu_details">
              <ul>
                <li onClick={updateMenu}>About Me </li>
                <hr />
                <li onClick={updateMenu}>Skills </li>
                <hr />
                <li onClick={updateMenu}>Project </li>
                <hr />
                <li onClick={updateMenu}>Contact Me</li>
                <hr />
              </ul>
              <Button variant="dark">
                Resume <img src={downloadSvg} alt="Download" />
              </Button>
            </div>
          </div>

          <Button variant="dark" className="decktop_btn">
            Resume <img src={downloadSvg} alt="Download" />
          </Button>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
