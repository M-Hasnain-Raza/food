"use client"

import Image from "next/image";
import ourChefBg from "../assets/ourChefBg.png";
import ourChefImg1 from "../assets/ourChefImg1.png";
import ourChefImg2 from "../assets/ourChefImg2.png";
import ourChefImg3 from "../assets/ourChefImg3.png";
import ourChefImg4 from "../assets/ourChefImg4.png";


export default function OurChefs() {
    return(
        <div className=" bg-[#0D0D0D] max-w-[1920px] mx-auto h-[800px] relative ">
            <Image src={ourChefBg} alt="" className=" absolute top-60 "></Image>
            <div className=" mx-auto  max-w-[1320px] h-[657px] text-center py-20">
                <h4 className=" text-[#ff9f0d] text-[32px] leading-[40px] ">Chefs</h4>
                <h2 className=" text-[48px] leading-[56px] "><span className=" text-[#ff9f0d] " >Me</span>et Our Chef</h2>
                <div className=" w-full mx-auto flex justify-between py-14 flex-wrap ">
                    <Image src={ourChefImg1} alt=""></Image>
                    <Image src={ourChefImg2} alt=""></Image>
                    <Image src={ourChefImg3} alt=""></Image>
                    <Image src={ourChefImg4} alt=""></Image>
                </div>

                <button className=" border border-[#ff9f0d] w-[155px] h-[50px] rounded-full  ">See More</button>
</div>
</div>
    )
}