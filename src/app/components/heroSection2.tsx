"use client";

import Link from "next/link";

import { FiSearch } from "react-icons/fi";
import { PiUser } from "react-icons/pi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { MdKeyboardArrowRight } from "react-icons/md";



export default function HeroSection2() {
  return (
    <div className=" max-w-[1920px] w-full  px-[0.5px] mx-auto ">
      <div className=" bg-[#0D0D0D] ">
        <div className=" w-[1320px] h-[100px] flex justify-between mx-auto items-center  ">
          <h5 className=" text-[24px] leading-[32px]  ">
            <span className=" text-[#ff9f0d]  ">Food</span>tuck
          </h5>
          <div className="  w-[510px] flex justify-between ">
            <p className=" text-[16px] leading-[24px] text-[#ff9f0d] ">
              <Link href="/">Home</Link>
            </p>
            <p className=" text-[16px] leading-[24px] ">
              <Link href="/menu">Menu</Link>
            </p>
            <p className=" text-[16px] leading-[24px] "><Link href={"/blog"}>Blog</Link> </p>
            <p className=" text-[16px] leading-[24px] "><Link href={"/blogDetails"}>BlogDetails</Link>  </p>
            <p className=" text-[16px] leading-[24px] "><Link href={"/aboutUs"}>About</Link> </p>
            <p className=" text-[16px] leading-[24px] "><Link href="/shoplist">Shop list</Link>
            </p>
            <p className=" text-[16px] leading-[24px] ">
            <Link href="/shopDetails">Shop Details</Link>
            </p>
          </div>
          <div className=" flex justify-between w-[90px] text-2xl ">
            <FiSearch></FiSearch>
            <PiUser></PiUser>
            <Link href="/shopingcart" >
            <HiOutlineShoppingBag/>
            </Link>
          </div>
        </div>
      </div>
      <div className=" w-full h-[410px] heroSection2 flex flex-col items-center justify-center  mx-auto ">
        <h2 className=" text-[48px] leading-[56px] ">Our Menu</h2>
        <div className=" flex justify-between items-center ">
          <p>Home</p>
          <MdKeyboardArrowRight className=" text-2xl"></MdKeyboardArrowRight>
          <p className="text-[#ff9f0d] ">Menu</p>
        </div>
      </div>
      
    </div>
  );
}
