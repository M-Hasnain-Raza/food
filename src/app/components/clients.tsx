"use clients"

import Image from "next/image";
import clientImg1 from "../assets/clientImg1.png";
import clientImg2 from "../assets/clientImg2.png";
import clientImg3 from "../assets/clientImg3.png";
import clientImg4 from "../assets/clientImg4.png";


export default function Clients() {
    return(
        <div className=" clients max-w-[1920px] mx-auto h-[469px]  -z-10 ">
           <div className="  bg-[#0D0D0D]  w-full  h-full opacity-90 " >
           <div className=" flex justify-between items-center h-full w-[1320px] mx-auto ">
            <div className=" flex flex-col gap-4 text-center w-[202px]  ">
            <Image src={clientImg1} alt="" className=" mx-auto "></Image>
<h1 className=" text-[24px] leading-[32px]  ">Professional Chefs</h1>
<h1 className=" text-[40px] leading-[48px] ">420</h1>
            </div>
            <div className=" flex flex-col gap-4 text-center w-[202px]  ">
            <Image src={clientImg2} alt="" className=" mx-auto"></Image>
<h1 className=" text-[24px] leading-[32px]  ">Items Of Food</h1>
<h1 className=" text-[40px] leading-[48px] ">320</h1>
            </div> <div className=" flex flex-col gap-4 w-[240px]  ">
            <Image src={clientImg3} alt="" className=" mx-auto"></Image>
<h1 className=" text-[24px] leading-[32px]  ">Years Of Experienced</h1>
<h1 className=" text-[40px] leading-[48px]  text-center ">30+</h1>
            </div> <div className=" flex flex-col gap-4 text-center w-[202px]  ">
            <Image src={clientImg4} alt="" className=" mx-auto"></Image>
<h1 className=" text-[24px] leading-[32px]  ">Happy Customers</h1>
<h1 className=" text-[40px] leading-[48px] ">220</h1>
            </div>
            </div>
           </div>
        </div>
    )
}