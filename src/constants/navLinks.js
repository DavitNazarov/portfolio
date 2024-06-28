import { router } from "./router";

const Home = "HOME";
const About = "ABOUT";
const Projects = "PROJECTS";
const Contact = "CONTACT ME";
const Experience = "EXPERIENCE WITH";

const navLinks = [
  { PageName: Home, Path: router.home },
  { PageName: About, Path: router.about },
  {
    PageName: Projects,
    Path: router.projects,
  },
  {
    PageName: Contact,
    Path: router.contact,
  },
  {
    PageName: Experience,
    Path: router.experience,
  },
];
export default navLinks;
