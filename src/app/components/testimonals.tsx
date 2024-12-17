"use client";

import Image from "next/image";

import testimonalDp from "../assets/testimonalDp.png";
import testimonalQuotes from "../assets/testimonalQuotes.png";
import testimonalStar from "../assets/testimonalStar.png";
import testimonalBg from "../assets/testimonalBg.png";
import testimonalDot from "../assets/testimonalDot.png";




export default function Testimonals() {
  return (
    <div className=" foodCategory bg-[#0D0D0D] max-w-[1920px] mx-auto h-[800px] ">
      <div className="max-w-[1320px] max-h-[489px] mx-auto">
        <div className=" text-center">
          <h4 className=" text-[#ff9f0d] text-[32px] leading-[40px] ">
            Testimonals
          </h4>
          <h2 className=" text-[48px] leading-[56px] ">
            <span className=" text-[#ff9f0d] ">Wh</span>at our client are saying
          </h2>
        </div>
        <div className=" bg-white w-[868px] h-[451px] mx-auto relative mt-28">
          <Image
            src={testimonalDp}
            alt=""
            className=" absolute -top-16 left-[365px] "
          ></Image>
          <Image src={testimonalQuotes} alt="" className=" pt-28 mx-auto"></Image>

          <p className=" text-black text-center py-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque <br /> bibendum non dui volutpat fringilla
            bibendum. Urna, elit augue urna, vitae feugiat <br /> pretium donec
            id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac
            <br /> dapibus sit eu velit in consequat.
          </p>
          <Image src={testimonalStar} alt="" className=" mx-auto"></Image>
          <h1 className=" text-black text-[24px] leading-[32px] text-center py-4 ">Hasnain Raza</h1>
          <h6 className=" text-gray-600 text-[16px] leading-[24px] text-center ">Food Specialist</h6>
          <Image src={testimonalBg} alt="" className=" absolute -right-48 top-[0px] "></Image>
        </div>

        <Image src={testimonalDot} alt="" className=" mx-auto py-10"></Image>
      </div>
    </div>
  );
}
