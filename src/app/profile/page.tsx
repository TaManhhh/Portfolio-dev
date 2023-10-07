"use client"
import AboutMe from "./AboutMe";
import ConTact from "./ConTact";
import Header from "./Header";
import Project from "./Project";
import Skills from "./Skills";

export interface IAppProps {}

export default function Profile(props: IAppProps) {
  return (
    <main>
      <Header />
      <AboutMe/>
      <Skills/>
      <Project/>
      <ConTact/>
    </main>
  );
}
