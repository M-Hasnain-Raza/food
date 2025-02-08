"use client";

import Image from "next/image";
import foodCategoryImg1 from "../assets/foodCategoryImg1.png";
import foodCategoryImg2 from "../assets/foodCategoryImg2.png";
import foodCategoryImg3 from "../assets/foodCategoryImg3.png";
import foodCategoryImg4 from "../assets/foodCategoryImg4.png";
import foodCategoryBg from "../assets/foodCategoryBg.png";
import chooseUsImg1 from "../assets/chooseUsImg1.png";
import chooseUsImg2 from "../assets/chooseUsImg2.png";
import chooseUsImg3 from "../assets/chooseUsImg3.png";
import chooseUsImg4 from "../assets/chooseUsImg4.png";
import chooseUsImg5 from "../assets/chooseUsImg5.png";
import chooseUsImg6 from "../assets/chooseUsImg6.png";
import yearsExperienced from "../assets/yearsExperienced.png"
import { PiHamburgerLight } from "react-icons/pi";
import { PiCookieLight } from "react-icons/pi";
import { PiWineLight } from "react-icons/pi";

export default function FoodCategory() {
  return (
    <div className=" foodCategory bg-[#0D0D0D] max-w-[1920px] mx-auto  relative">
      <div className="aboutUsTextAndaboutUsImages max-w-[1320px]  mx-auto">
        <div className=" text-center pb-12 ">
          <h1 className=" text-[#ff9f0d] text-[32px] leading-[40px] ">
            Food Category
          </h1>
          <h1 className=" text-[48px] leading-[56px]  ">
            <span className="text-[#ff9f0d]">Ch</span>oose Food Item
          </h1>
        </div>
        <div className=" flex gap-4 flex-wrap justify-center ">
          <Image src={foodCategoryImg1} alt=""></Image>
          <Image src={foodCategoryImg2} alt=""></Image>
          <Image src={foodCategoryImg3} alt=""></Image>
          <Image src={foodCategoryImg4} alt=""></Image>
        </div>
      </div>
      <Image
        src={foodCategoryBg}
        alt=""
        className=" absolute top-52 right-0 hidden md:block"
      />



      {/* why Choose Us */}
      <div className=" max-w-[1320px] mx-auto my-40 flex justify-between flex-col ">
        <div className=" w-[660px] flex flex-col gap-4 flex-wrap  ">
          <div className="flex justify-between">
            <Image
              src={chooseUsImg1}
              alt=""
              className="w-[362px] h-[356px]"
            ></Image>
            <Image
              src={chooseUsImg2}
              alt=""
              className="w-[281px] h-[231px] mt-[126px] "
            ></Image>
          </div>
          <div className=" flex  justify-between ">
            <Image
              src={chooseUsImg3}
              alt=""
              className=" w-[244px] h-[306px]"
            ></Image>
            <Image
              src={chooseUsImg4}
              alt=""
              className=" w-[221px] h-[226px]"
            ></Image>

            <div className=" flex flex-col gap-4 ">
              <Image
                src={chooseUsImg5}
                alt=""
                className=" w-[161px] h-[168px] "
              ></Image>
              <Image
                src={chooseUsImg6}
                alt=""
                className=" w-[161px] h-[168px]"
              ></Image>
            </div>
          </div>
        </div>

        <div className=" max-w-[526px] py-[30px] ">
          <h1 className=" text-[#ff9f0d] text-[32px] leading-[40px]">
            Why Choose Us
          </h1>
          <h1 className=" text-[48px] leading-[56px] py-3 ">
            <span className="text-[#ff9f0d] ">Ex</span>tra ordinary taste <br />
            And Experienced{" "}
          </h1>
          <p className=" text-[16px] leading-[24px] pt-6 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam <br /> pellentesque bibendum non dui volutpat fringilla
            bibendum. Urna, elit <br /> augue urna, vitae feugiat pretium donec
            id elementum. Ultrices mattis <br /> sed vitae mus risus. Lacus
            nisi, et ac dapibus sit eu velit in <br />
            consequat.
          </p>
          <div className=" w-[370px] flex justify-between py-8 ">
            <div>
            <div className=" w-[102px] h-[100px] bg-[#ff9f0d] flex justify-center items-center rounded-lg "><PiHamburgerLight className=" text-[45px] "></PiHamburgerLight></div>
            <h1 className=" text-center pt-3 text-[18px] leading-[26px] ">Fast Food</h1>
            </div>
            <div>
            <div className=" w-[102px] h-[100px] bg-[#ff9f0d] flex justify-center items-center rounded-lg "><PiCookieLight className=" text-[45px] "></PiCookieLight></div>
            <h1 className=" text-center pt-3 text-[18px] leading-[26px]">Lunch</h1>
            </div>
            <div>
            <div className=" w-[102px] h-[100px] bg-[#ff9f0d] flex justify-center items-center rounded-lg "><PiWineLight className=" text-[45px] "></PiWineLight></div>
            <h1 className=" text-center pt-3 text-[18px] leading-[26px] ">Dinner</h1>
         </div>
          </div>
          <Image src={yearsExperienced} alt=""></Image>
        </div>
      </div>
    </div>
  );
}
