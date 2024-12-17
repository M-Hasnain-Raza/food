"use client";

import Image from "next/image";

import blogImg1 from "../assets/blogImg1.png";
import blogImg2 from "../assets/blogImg2.png";
import blogImg3 from "../assets/blogImg3.png";
import { BiLike } from "react-icons/bi";
import { LiaCommentDots } from "react-icons/lia";
import { MdOutlineShare } from "react-icons/md";

export default function BlogPost() {
  return (
    <div className=" bg-[#0D0D0D] max-w-[1920px] mx-auto h-[900px] p-[1px] ">
      <div className=" mx-auto  w-[1320px] h-[570px] text-center p-[1px] py-20 ">
        <h4 className=" text-[#ff9f0d] text-[32px] leading-[40px] ">
          Blog Post
        </h4>
        <h2 className=" text-[48px] leading-[56px] pb-20 ">
          <span className=" text-[#ff9f0d] ">La</span>test News & Blog
        </h2>
       <div className=" w-full flex justify-between ">
         <div className=" card border-[0.5px] border-white  max-w-[424px]">
          <Image
            className="w-full"
            src={blogImg1}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4 text-start">
             <p className="text-[#ff9f0d] ">
            10 February 2022 
            </p>
            <div className="font-bold text-xl py-1 ">Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis</div>
           
          </div>
          <div className=" mx-auto p-6 flex justify-between ">
            <p className=" ">Learn More</p>
            <div className=" flex text-2xl justify-between w-[90px] p-[1px] ">
            <BiLike></BiLike>
            <LiaCommentDots className=" text-[#ff9f0d] "></LiaCommentDots>
            <MdOutlineShare></MdOutlineShare>
            </div>
          </div>
        </div>
         <div className=" card border-[0.5px] border-white  max-w-[424px]">
          <Image
            className="w-full"
            src={blogImg2}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4 text-start">
             <p className="text-[#ff9f0d] ">
            10 February 2022 
            </p>
            <div className="font-bold text-xl py-1 ">Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis</div>
           
          </div>
          <div className=" mx-auto  p-6  flex justify-between ">
            <p className=" ">Learn More</p>
            <div className=" flex text-2xl justify-between w-[90px] p-[1px] ">
            <BiLike></BiLike>
            <LiaCommentDots className=" text-[#ff9f0d] "></LiaCommentDots>
            <MdOutlineShare></MdOutlineShare>
            </div>
          </div>
        </div>
         <div className=" card border-[0.5px] border-white   max-w-[424px]">
          <Image
            className="w-full"
            src={blogImg3}
            alt="Sunset in the mountains"
          />
          <div className="px-6 py-4 text-start">
             <p className="text-[#ff9f0d] ">
            10 February 2022 
            </p>
            <div className="font-bold text-xl py-1 ">Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis</div>
           
          </div>
          <div className=" mx-auto p-6  flex justify-between ">
            <p className=" ">Learn More</p>
            <div className=" flex text-2xl justify-between w-[90px] p-[1px] ">
            <BiLike></BiLike>
            <LiaCommentDots className=" text-[#ff9f0d] "></LiaCommentDots>
            <MdOutlineShare></MdOutlineShare>
            </div>
          </div>
        </div>
       </div>
      </div>
    </div>
  );
}
