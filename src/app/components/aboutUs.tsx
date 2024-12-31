"use client"

import aboutUsImg1 from "../assets/aboutUsImg1.png";
import aboutUsImg2 from "../assets/aboutUsImg2.png";
import aboutUsImg3 from "../assets/aboutUsImg3.png";
import Image from "next/image";
import { FaCheck } from "react-icons/fa6";

export default function AboutUs() {
  return (
    <div className=" aboutUsTextAndaboutUsImages bg-[#0D0D0D]  max-w-[1440px] mx-auto h-[800px]  ">
      <div className="max-w-[1280px] max-h-[562px] mx-auto flex justify-between py-32 ">
        <div className=" aboutUsText ">
          <h4 className=" h4 text-[#ff9f0d] ">
            About us
          </h4>
          <h2 className=" h2 pt-5 ">
            <span className=" text-[#ff9f0d] ">We </span>Create the best
            <br /> foody product
          </h2>
          <p className=" text-[16px] leading-[24px] py-6 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam <br /> pellentesque bibendum non dui volutpat fringilla
            bibendum. Urna, elit <br /> augue urna, vitae feugiat pretium donec
            id elementum. Ultrices mattis <br /> sed vitae mus risus. Lacus
            nisi, et ac dapibus sit eu velit in <br /> consequat.
          </p>
          <div className=" flex"> <FaCheck className=" mr-2"/> Lacus nisi, et ac dapibus sit eu velit in consequat.</div>
          <div className=" flex py-3"><FaCheck className=" mr-2"/> Quisque diam pellentesque bibendum non dui volutpat fringilla </div>
          <div className=" flex"><FaCheck className=" mr-2"/> Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>

          <button className=" bg-[#ff9f0d] w-[190px] h-[60px] rounded-full my-6 ">Read More</button>
        </div>
        <div className=" aboutUsImages ">
            <Image src={aboutUsImg1} alt=""></Image>
           <div className="flex justify-between py-3 ">
           <Image src={aboutUsImg2} alt=""></Image>
           <Image src={aboutUsImg3} alt=""></Image>
           </div>
        </div>
      </div>
    </div>
  );
}
