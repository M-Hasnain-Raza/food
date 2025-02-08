"use client";

import Image from "next/image";
import aboutUsPgImg1 from "../assets/aboutUsPgImg1.png";
import aboutUsPgImg2 from "../assets/aboutUsPgImg2.png";
import aboutUsPgImg3 from "../assets/aboutUsPgImg3.png";
import aboutUsPgImg4 from "../assets/aboutUsPgImg4.png";
import Student from "../assets/Student.png";
import Coffee from "../assets/Coffee.png";
import Person from "../assets/Person.png";
import teamImg from "../assets/teamImg.png";
import Testimonals from "./testimonals";

import { IoPlayOutline } from "react-icons/io5";

export default function AboutUsPage() {
  return (
    <div className="xl:min-w-[1025px] xl:max-w-[1440px] 2xl:min-w-[1441px] 2xl:max-w-[1920px] mx-auto px-[0.5px]  ">
      <div className="2xl:max-w-[1320px] flex flex-col gap-20 py-28 mx-auto">
        <div className="2xl:max-w-[1320px] 2xl:max-h-[736px]  flex justify-between items-center  ">
          <div className=" flex gap-5 w-[670px] ">
            <Image src={aboutUsPgImg1} alt="" className=" h-[536px] "></Image>
            <div className="flex flex-col gap-5 pt-8 ">
              <Image src={aboutUsPgImg2} alt=""></Image>
              <Image src={aboutUsPgImg3} alt=""></Image>
            </div>
          </div>
          <div className="flex flex-col gap-5 w-[530px] ">
            <h4 className=" h4Title text-[#ff9f0d]  ">About Us</h4>
            <h2 className=" h2 text-black ">
              Food is an important part Of a balanced Diet
            </h2>
            <p className=" p text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu
              velit in consequat.
            </p>
            <div className=" flex gap-3 items-center ">
              <button className=" w-[195px] h-[60px] bg-[#ff9f0d] rounded-lg p ">
                Show more
              </button>
              <button className=" w-[60px] h-[60px] bg-[#ff9f0d] rounded-full text-[40px] flex justify-center items-center ">
                <IoPlayOutline />
              </button>
              <p className=" p font-bold  text-black ">Watch Video</p>
            </div>
          </div>
        </div>

        <div className="2xl:max-w-[1320px]  flex flex-col gap-5 justify-center items-center ">
          <h2 className=" h2 text-black ">Why Choose us</h2>
          <p className=" p text-gray-600 text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam <br /> pellentesque bibendum non dui volutpat fringilla
            bibendum.{" "}
          </p>
          <Image src={aboutUsPgImg4} alt=""></Image>
          <div className=" flex justify-between items-center text-gray-600  w-[1320px] mx-auto ">
            <div className=" flex flex-col gap-4 text-center  ">
              <Image src={Student} alt="" className=" mx-auto "></Image>
              <h5 className=" h5  ">
              Best Chefs
              </h5>
              <p className=" p-sm ">
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Quisque
                diam pellentesque <br /> bibendum non dui volutpat{" "}
              </p>
            </div>
            <div className=" flex flex-col gap-4 text-center  ">
              <Image src={Coffee} alt="" className=" mx-auto"></Image>
              <h5 className=" h5  ">120 Item Food</h5>
              <p className=" p-sm ">
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Quisque
                diam pellentesque <br /> bibendum non dui volutpat{" "}
              </p>
            </div>
            <div className=" flex flex-col gap-4 text-center ">
              <Image src={Person} alt="" className=" mx-auto"></Image>
              <h5 className=" h5  ">
              Clean Environment
              </h5>
              <p className=" p-sm  ">
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Quisque
                diam pellentesque <br /> bibendum non dui volutpat{" "}
              </p>
            </div>
          </div>
          <div className=" flex flex-col items-center justify-center w-[1920px] h-[460px] bg-[#ff9f0d] relative mb-60  ">
            <h2 className=" h2 ">Team Member</h2>
            <p className=" p text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Varius sed pharetra dictum neque massa congue</p>
            <div className=" flex justify-between w-[1320px] absolute -bottom-80 ">
              <div className=" flex flex-col gap-2 bg-white shadow-xl  " >
              <Image src={teamImg} alt=""></Image>
              <h5 className=" h5 text-black text-center ">Mark Henry</h5>
              <p className=" p-sm text-black text-center ">Food Specialist</p>
              </div>
              <div className=" flex flex-col gap-2 bg-white shadow-xl  " >
              <Image src={teamImg} alt=""></Image>
              <h5 className=" h5 text-black text-center ">Mark Henry</h5>
              <p className=" p-sm text-black text-center ">Food Specialist</p>
              </div><div className=" flex flex-col gap-2 bg-white shadow-xl  " >
              <Image src={teamImg} alt=""></Image>
              <h5 className=" h5 text-black text-center ">Mark Henry</h5>
              <p className=" p-sm text-black text-center ">Food Specialist</p>
              </div><div className=" flex flex-col gap-2 bg-white shadow-xl  " >
              <Image src={teamImg} alt=""></Image>
              <h5 className=" h5 text-black text-center ">Mark Henry</h5>
              <p className=" p-sm text-black text-center ">Food Specialist</p>
              </div>
            </div>
          </div>
          <Testimonals></Testimonals>
        </div>

      </div>
    </div>
  );
}
