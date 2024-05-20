import { useEffect, useState } from "react";
import AboutMe from "./AboutMe";
import Mastery from "./Mastery";
import Project from "./Project";
const MainContent = () => {
  const [windowLocation, setWindowLocation] = useState("");

  useEffect(() => {
    if (window.location.pathname === "/") {
      setWindowLocation("home");
    } else if (window.location.pathname === "/mastery") {
      setWindowLocation("mastery");
    } else if (window.location.pathname === "/project") {
      setWindowLocation("project");
    }
  }, [window.location.pathname]);

  if (windowLocation === "home") {
    return <AboutMe />;
  } else if (windowLocation === "mastery") {
    return <Mastery />;
  } else if (windowLocation === "project") {
    return <Project />;
  }
};

export default MainContent;
