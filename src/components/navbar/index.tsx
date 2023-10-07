"use client";
import React, { useEffect, useState } from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookOpen,
  faComment,
  faFolderOpen,
  faHouse,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Navbar = ({ result }: any) => {
  console.log("🚀 ~ file: index.tsx:15 ~ Navbar ~ result:", result);
  const screenHeight = typeof window !== "undefined" ? window.innerHeight : 0;
  const [activeLink, setActiveLink] = useState("#home");

  console.log("🚀 ~ file: index.tsx:17 ~ Navbar ~ activeLink:", activeLink);
  useEffect(() => {
    function handleScrollNavbar() {
      const scrollTop = window.scrollY;
      const { contactTop, skillsTop, projectTop, top, aboutTop } = result;

      if (scrollTop + screenHeight * 0.2 >= contactTop) {
        setActiveLink("#contact");
        return;
      } if (scrollTop + screenHeight * 0.2 >= projectTop) {
        setActiveLink("#project");
        return;
      } if (scrollTop + screenHeight * 0.2 >= skillsTop) {
        setActiveLink("#skill");
        return;
      } if (scrollTop + screenHeight * 0.2 >= aboutTop) {
        setActiveLink("#about");
        return;
      } if (scrollTop + screenHeight * 0.2 >= top) {
        setActiveLink("#home");
        return;
      }


    }
    window.addEventListener("scroll", handleScrollNavbar);
    return () => window.removeEventListener("scroll", handleScrollNavbar);
  }, [screenHeight, result]);
  return (
    <div className=" navbar w-max h-[66px] z-50 fixed translate-x-[-50%] bottom-[5%] left-[50%] rounded-full  grid grid-cols-5 justify-center items-center gap-6 px-12">
      <Link
        href="#home"
        onClick={() => setActiveLink("#home")}
        className={activeLink === "#home" ? " active" : "navbar-button"}
      >
        <FontAwesomeIcon icon={faHouse} size="xl" />
      </Link>
      <Link
        href="#about"
        className={activeLink === "#about" ? " active" : "navbar-button"}
        onClick={() => setActiveLink("#about")}
      >
        <FontAwesomeIcon icon={faUser} size="xl" />
      </Link>
      <Link
        href="#skill"
        className={activeLink === "#skill" ? " active" : "navbar-button"}
        onClick={() => setActiveLink("#skill")}
      >
        <FontAwesomeIcon icon={faBookOpen} size="xl" />
      </Link>

      <Link
        href="#project"
        className={activeLink === "#project" ? " active" : "navbar-button"}
        onClick={() => setActiveLink("#project")}
      >
        <FontAwesomeIcon icon={faFolderOpen} size="xl" />
      </Link>
      <Link
        href="#contact"
        className={activeLink === "#contact" ? " active" : "navbar-button"}
        onClick={() => setActiveLink("#contact")}
      >
        <FontAwesomeIcon icon={faComment} size="xl" />
      </Link>
    </div>
  );
};

export default Navbar;
