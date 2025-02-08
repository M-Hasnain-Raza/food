"use client"

import { IoPlayOutline } from "react-icons/io5";


export default function RestaurantProcess() {
  return (
    <div className=" restaurantProcessBg max-w-[1920px] h-[558px] mx-auto  ">
      <div className=" max-w-[1320px]  h-full mx-auto flex flex-col justify-center ">
        <div className=" text-end ">
          <h4 className=" text-[#ff9f0d] text-[32px] leading-[40px] ">
            Restaurant Active Process
          </h4>
          <h2 className=" text-[48px] leading-[56px] py-2 ">
            <span className=" text-[#ff9f0d] ">We</span> Document Every Food{" "}
            <br />
            Bean Process untile it is saved
          </h2>
          <p className=" py-8 text-[16px] leading-[24px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque <br /> bibendum non dui volutpat fringilla
            bibendum. Urna, elit augue urna,
          </p>
          </div>
          <div className="flex justify-end">
          <div className=" flex w-[380px] justify-between  ">
            <button className=" border border-[#ff9f0d] w-[155px] h-[60px] rounded-full  ">
              See More
            </button>
            <div className=" flex justify-between w-[190px] items-center ">
            <div className=" w-[60px] h-[60px] bg-[#ff9f0d] rounded-full text-[40px] flex justify-center items-center "><IoPlayOutline /></div>
            <h5 className=" text-[24px] leading-[32px] font-bold  ">Play Video</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
