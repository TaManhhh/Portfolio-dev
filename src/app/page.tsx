"use client";
import Image from "next/image";
import { logo } from "@/assets";
import Link from "next/link";
import Profile from "./profile/page";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { createContext, useState ,useContext } from "react";
type TopContextValue = {
  componentTop: any;
  setComponentTop: React.Dispatch<React.SetStateAction<any>>;
};
const initialComponentTop = {
  aboutTop: 0,
  projectTop: 0,
  skillsTop: 0,
  contactTop: 0,
  top:0
};
export const topContext = createContext<TopContextValue | null>(null)
export const useTopContext = () => {
  const context = useContext(topContext);
  if (!context) {
    throw new Error("useTopContext must be used within a TopContextProvider");
  }
  return context;
};
export default function Home() {
  const [componentTop, setComponentTop] = useState<any>(initialComponentTop);
  return (
    <topContext.Provider value={{componentTop, setComponentTop}}>
      <main className="home">
        <Navbar result={componentTop} />
        <Profile />
        <Footer />
      </main>
    </topContext.Provider>
  );
}
