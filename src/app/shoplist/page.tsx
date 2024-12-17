"use client";

import Footer from "../components/footer";
import HeroSection2 from "../components/heroSection2";
import ShopList from "../components/shopList";

export default function Shoplist() {
  return (
    <div className=" max-w-[1920px] mx-auto px-[0.2px] border-[0.3px] border-gray-300 ">
      <HeroSection2></HeroSection2>
      <ShopList></ShopList>
      <Footer></Footer>
    </div>
  );
}
