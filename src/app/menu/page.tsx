"use client";

import HeroSection2 from "../components/heroSection2";
import Menu1 from "../components/menu1";
import Clients from "../components/clients";
import Menu2 from "../components/menu2";
import Footer from "../components/footer";

export default function Menu() {
  return (
    <div className=" max-w-[1920px] mx-auto px-[0.2px] border-[0.3px] border-gray-500 ">
      <HeroSection2></HeroSection2>
      <Menu1></Menu1>
      <Clients></Clients>
      <Menu2></Menu2>
      <Footer></Footer>
    </div>
  );
}
