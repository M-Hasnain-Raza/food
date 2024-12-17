"use client"

import Image from "next/image";

import choosePickImg2 from "../assets/choosePickImg2.png";
import choosePickImg3 from "../assets/choosePickImg3.png";
import choosePickImg4 from "../assets/choosePickImg4.png";
import choosePickImg5 from "../assets/choosePickImg5.png";
import choosePickImg6 from "../assets/choosePickImg6.png";
import choosePickImg7 from "../assets/choosePickImg7.png";
import choosePickImg8 from "../assets/choosePickImg8.png";
import choosePickImg9 from "../assets/choosePickImg9.png";
import choosePickImg10 from "../assets/choosePickImg10.png";


export default function ChoosePickMenu() {
    return(
        <div className=" bg-[#0D0D0D] max-w-[1920px] mx-auto h-[800px] ">
            <div className=" mx-auto  max-w-[1320px] h-[656px] py-20">
                <div className="text-center">
                    <h4 className=" text-[#ff9f0d] text-[32px] leading-[40px] ">Choose & pick</h4>
                    <h2 className=" text-[48px] leading-[56px] "><span className=" text-[#ff9f0d]">Fr</span>om Our Menu</h2>
                    <div className=" max-w-[1056px] mx-auto flex justify-between py-14 ">
                        <h6 className=" text-[20px] leading-[28px] text-[#ff9f0d] ">Breakfast</h6>
                        <h6 className=" text-[20px] leading-[28px] ">Lunch</h6>
                        <h6 className=" text-[20px] leading-[28px] ">Dinner</h6>
                        <h6 className=" text-[20px] leading-[28px] ">Dessert</h6>
                        <h6 className=" text-[20px] leading-[28px] ">Drink</h6>
                        <h6 className=" text-[20px] leading-[28px] ">Snack</h6>
                        <h6 className=" text-[20px] leading-[28px] ">Soups</h6>
                    </div>

                    <div className=" flex justify-between">
                        <div className=" choosePickBg w-[500px] h-[406px] ">
                            <Image src={choosePickImg2} alt="" className=" mx-auto"></Image>

                        </div>
                        <div className="w-[752px] flex flex-wrap gap-8  ">
                             <div className=" flex" > <Image src={choosePickImg3} alt=""></Image> <div className=" flex flex-col text-start pl-2  "><h6 className=" text-[20px] leading-[28px] ">Lettuce Leaf </h6> 
                             <p className=" text-[14px] leading-[22px] ">Lacus nisi, et ac dapibus velit in consequat.</p> <p className=" text-[18px] leading-[26px] text-[#ff9f0d] ">12.5$</p></div></div>
                             <div className=" flex" > <Image src={choosePickImg4} alt=""></Image> <div className=" flex flex-col text-start pl-2  "><h6 className=" text-[20px] leading-[28px] ">Fresh Breakfast</h6> 
                             <p className=" text-[14px] leading-[22px] ">Lacus nisi, et ac dapibus velit in consequat.</p> <p className=" text-[18px] leading-[26px] text-[#ff9f0d] ">12.5$</p></div></div>
                             <div className=" flex" > <Image src={choosePickImg5} alt=""></Image> <div className=" flex flex-col text-start pl-2  "><h6 className=" text-[20px] leading-[28px] ">Mild Butter</h6> 
                             <p className=" text-[14px] leading-[22px] ">Lacus nisi, et ac dapibus velit in consequat.</p> <p className=" text-[18px] leading-[26px] text-[#ff9f0d] ">12.5$</p></div></div>
                             <div className=" flex" > <Image src={choosePickImg6} alt=""></Image> <div className=" flex flex-col text-start pl-2  "><h6 className=" text-[20px] leading-[28px] ">Fresh Bread</h6> 
                             <p className=" text-[14px] leading-[22px] ">Lacus nisi, et ac dapibus velit in consequat.</p> <p className=" text-[18px] leading-[26px] text-[#ff9f0d] ">12.5$</p></div></div>
                             <div className=" flex" > <Image src={choosePickImg7} alt=""></Image> <div className=" flex flex-col text-start pl-2  "><h6 className=" text-[20px] leading-[28px] ">Glow Cheese</h6> 
                             <p className=" text-[14px] leading-[22px] ">Lacus nisi, et ac dapibus velit in consequat.</p> <p className=" text-[18px] leading-[26px] text-[#ff9f0d] ">12.5$</p></div></div>
                             <div className=" flex" > <Image src={choosePickImg8} alt=""></Image> <div className=" flex flex-col text-start pl-2  "><h6 className=" text-[20px] leading-[28px] ">Italian Pizza</h6> 
                             <p className=" text-[14px] leading-[22px] ">Lacus nisi, et ac dapibus velit in consequat.</p> <p className=" text-[18px] leading-[26px] text-[#ff9f0d] ">12.5$</p></div></div>
                             <div className=" flex" > <Image src={choosePickImg9} alt=""></Image> <div className=" flex flex-col text-start pl-2  "><h6 className=" text-[20px] leading-[28px] ">Sllice Beef</h6> 
                             <p className=" text-[14px] leading-[22px] ">Lacus nisi, et ac dapibus velit in consequat.</p> <p className=" text-[18px] leading-[26px] text-[#ff9f0d] ">12.5$</p></div></div>
                             <div className=" flex" ><Image src={choosePickImg10} alt=""></Image> <div className=" flex flex-col text-start pl-2  "><h6 className=" text-[20px] leading-[28px] " >Mushaom Pizza</h6> 
                             <p className=" text-[14px] leading-[22px] ">Lacus nisi, et ac dapibus velit in consequat.</p> <p className=" text-[18px] leading-[26px] text-[#ff9f0d] ">12.5$</p></div></div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}