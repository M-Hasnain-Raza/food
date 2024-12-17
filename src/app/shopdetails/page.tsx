"use client";

import Footer from "../components/footer";
import HeroSection2 from "../components/heroSection2";
import ShopDetails from "../components/shopDetails";

export default function Shopdetails() {
  return (
    <div className=" max-w-[1920px] mx-auto px-[0.2px] border-[0.3px] border-gray-300 ">
      <HeroSection2></HeroSection2>
<ShopDetails></ShopDetails>
      <Footer></Footer>
    </div>
  );
}
