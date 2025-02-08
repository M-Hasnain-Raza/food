"use client";

import { useParams } from "next/navigation";
import Footer from "../../components/footer";
import HeroSection2 from "../../components/heroSection2";
import ProductDetail from "../../components/productDetails";


export default function Shopdetails() {

  const params = useParams()

  console.log("params", params);
  
  
  
  return (
    <div className=" max-w-[1920px] mx-auto px-[0.5px] ">
      <HeroSection2></HeroSection2>
      <ProductDetail id={params}></ProductDetail>
      <Footer></Footer>
    </div>
  );
}
