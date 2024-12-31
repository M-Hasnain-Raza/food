"use client";

import Footer from "../components/footer";
import HeroSection2 from "../components/heroSection2";
import ShopingCart from "../components/shopingCart";

export default function Shopingcart() {
  return (
    <div className=" max-w-[1920px] mx-auto  border-[0.3px] border-gray-300 ">
      <HeroSection2></HeroSection2>
      <ShopingCart></ShopingCart>
      <Footer></Footer>
    </div>
  );
}
