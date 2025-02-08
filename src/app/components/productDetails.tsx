"use client";

import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import {client} from "../../sanity/lib/client";




import shopImg1 from "../assets/shopImg1.png";
import shopImg2 from "../assets/shopImg2.png";
import shopImg3 from "../assets/shopImg3.png";
import shopImg4 from "../assets/shopImg4.png";

import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { FaStar } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { VscGitCompare } from "react-icons/vsc";
import { IoIosHeartEmpty } from "react-icons/io";
import { PiYoutubeLogo } from "react-icons/pi";
import { SiFacebook } from "react-icons/si";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RxDiscordLogo } from "react-icons/rx";
import { RiInstagramFill } from "react-icons/ri";
import { Params } from "next/dist/server/request/params";

export default function ProductDetail({id}: {id : Params}) {


    const [dish, setDish] = useState<any>()
    const [isLoading , setIsLoading] = useState(true);
    const [error, setError] = useState("")
    const {dishItem} = id

    console.log("dishItem", dishItem);
    
  
    async function getDish() {

      try {
        const dishData  = await client.fetch(`*[_type == "food" && _id == "${dishItem}"]{name, price, originalPrice, "image" : image.asset -> url, _type, _id, category, description}`);
      console.log("dishData",dishData)
        if(dishData.length){
        setDish(dishData);
       
        
     setIsLoading(false);}

       
      } catch(err) {
        setError("error");
        console.log("Error : ", err)
      }
  
  }

   useEffect(() => {
    if (dish?.length) {
      // setIsLoading(false);
      // setError("");
    }
  }, [dish]);

  useEffect(()=>{
        getDish()
      }, []);

      console.log("dish",dish);
  console.log("id", id);

 function sendData() {
   console.log("sendData", sendData);
   
 }
   
   
  return (
    <div className=" w-[1920px] mx-auto py-12 ">
      <div className=" w-[1320px] mx-auto flex flex-col gap-8 py-8 ">
          
      {
        !isLoading ? 
         <div className=" w-full h-[720px] flex justify-between   ">
        <div className=" w-[650px] flex justify-between ">
         
          <div className=" flex flex-col gap-3 ">
            <Image height={100} width={100} src={dish[0]?.image} alt=""></Image>
            <Image height={100} width={100} src={dish[0]?.image} alt=""></Image>
            <Image height={100} width={100} src={dish[0]?.image} alt=""></Image>
            <Image height={100} width={100} src={dish[0]?.image} alt=""></Image>


          </div>
          <div>
            <Image height={900} width={500} src={dish[0]?.image} alt=""></Image> 
          </div>
        </div>
        <div className=" w-[610px] flex flex-col ">
          <div className=" flex flex-col gap-4  border-b border-gray-300 ">
            <div className=" w-full flex justify-between">
              <span className="inline-flex items-center rounded-md bg-[#ff9f0d] px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-yellow-600/20">
                In stock
              </span>
              <div className=" flex justify-between w-[150px] ">
                <button className=" hover:bg-gray-200 text-gray-400 inline-flex  rounded  ">
                  <GoArrowLeft className=" text-xl "></GoArrowLeft>

                  <p className=" p-sm ">Previous</p>
                </button>
                <button className=" hover:bg-gray-200 text-gray-400 inline-flex  rounded  ">
                  <p>Next</p>
                  <GoArrowRight className=" text-xl "></GoArrowRight>
                </button>
              </div>
            </div>

            <h2 className=" h2 text-[#0D0D0D]   ">{dish[0]?.name}</h2>
            <p className=" p text-gray-500 pb-8 ">
              {dish[0]?.description}
            </p>
          </div>
          <div className=" flex flex-col gap-4 py-8 border-b border-gray-300 ">
            <h4 className=" h4 text-[#0D0D0D]  ">{dish[0]?.price}</h4>
            <div className=" flex  text-gray-500  gap-3 ">
              <div className=" flex items-center text-[#ff9f0d] ">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              <p className=" p ">|</p>
              <p className=" p ">5.0 Rating</p>
              <p className=" p ">|</p>
              <p className=" p ">22 Review</p>
            </div>
            <p className=" p text-gray-500  ">Dictum/cursus/Risus</p>
            <div className=" flex gap-4">
              <div className=" flex ">
                <button className=" w-[60px] h-[50px] text-[#0D0D0D]  text-4xl border-[1px] border-gray-500  ">
                  -
                </button>
                <button className=" w-[60px] h-[50px] text-[#0D0D0D]  text-xl border-y-[1px] border-gray-500  ">
                  1
                </button>
                <button className=" w-[60px] h-[50px] text-[#0D0D0D]  text-4xl border-[1px] border-gray-500  ">
                  +
                </button>
              </div>
              <button onClick={()=>{
                sendData()
              }} className=" w-[190px] h-[50px] bg-[#ff9f0d] inline-flex gap-3 items-center justify-center ">
                <IoBagOutline />
                Add to cart
              </button>
            </div>
          </div>
          <div className=" flex flex-col gap-4 py-8 border-b border-gray-300 ">
            <p className=" flex gap-2 text-gray-500  ">
              <IoIosHeartEmpty /> Add to Wishlist <VscGitCompare />
              Compare
            </p>
            <p className="  text-gray-500  ">Category: {dish[0]?.category}</p>
            <p className="  text-gray-500  ">Tag: {dish[0]?._type}</p>
            <p className=" flex items-center gap-3 text-gray-500  ">
              Share : <PiYoutubeLogo />
              <SiFacebook />
              <AiFillTwitterCircle />
              <RxDiscordLogo />
              <RiInstagramFill />{" "}
            </p>
          </div>
        </div>
      </div>
        : <>Loading...</>
      }          
       
        <div className=" h-[460px] flex flex-col gap-8 py-8  ">
          <div className=" flex items-center gap-4 ">
            <div className=" w-[165px] h-[50px] bg-[#ff9f0d] inline-flex items-center justify-center ">
              Description
            </div>
            <p className=" text-[#0D0D0D] ">Reviews (24)</p>
          </div>
          <p className=" text-gray-500 ">
            Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed
            purus augue, eu euismod tellus. Nam mattis eros nec mi sagittis
            sagittis. Vestibulum suscipit cursus <br /> bibendum. Integer at
            justo eget sem auctor auctor eget vitae arcu. Nam tempor malesuada
            porttitor. Nulla quis dignissim ipsum. Aliquam pulvinar iaculis
            justo, sit amet <br />
            interdum sem hendrerit vitae. Vivamus vel erat tortor. Nulla
            facilisi. In nulla quam, lacinia eu aliquam ac, aliquam in nisl.
          </p>
          <p className=" text-gray-500 ">
            Suspendisse cursus sodales placerat. Morbi eu lacinia ex. Curabitur
            blandit justo urna, id porttitor est dignissim nec. Pellentesque
            scelerisque hendrerit posuere. Sed at dolor <br /> quis nisi rutrum
            accumsan et sagittis massa. Aliquam aliquam accumsan lectus quis
            auctor. Curabitur rutrum massa at volutpat placerat. Duis sagittis
            vehicula fermentum. <br /> Integer eu vulputate justo. Aenean pretium odio
            vel tempor sodales. Suspendisse eu fringilla leo, non aliquet sem.
          </p>
          <div className="text-[#0D0D0D] ">
            <p className=" p-sm ">Key Benefits</p>
            <ol className="  ">
              <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </li>
              <li>Maecenas ullamcorper est et massa mattis condimentum.
              </li>
              <li>Vestibulum sed massa vel ipsum imperdiet malesuada id tempus nisl.</li>
              <li>Etiam nec massa et lectus faucibus ornare congue in nunc.</li>
              <li>Mauris eget diam magna, in blandit turpis.</li>

            </ol>
          </div>
        </div>
        <div className=" h-[400px] flex flex-col gap-8 py-6 ">
          <div className=" flex justify-between">
          <h4 className=" text-[#0D0D0D] h4">Similar Products</h4>
          <div className=""  >
            <button className=" w-[40px] h-[40px] rounded-full bg-gray-400 inline-flex justify-center items-center "><GoArrowLeft/></button>
            <button className=" w-[40px] h-[40px] rounded-full bg-[#ff9f0d] inline-flex justify-center items-center "><GoArrowRight/></button>

          </div>
          </div>
          <div className=" flex justify-between  ">
          <div className="">
            {" "}
            <Image src={shopImg1} alt=""></Image>
            <p className=" p text-[#0D0D0D] py-2 ">Fresh Lime</p>
            <p className=" p-sm text-[#ff9f0d] ">
              $28.00
              <span className=" line-through text-gray-400 pl-2 ">$45.00</span>
            </p>
          </div>
          <div className="">
            {" "}
            <Image src={shopImg2} alt=""></Image>
            <p className=" p text-[#0D0D0D] py-2 ">Fresh Lime</p>
            <p className=" p-sm text-[#ff9f0d] ">
              $28.00
              <span className=" line-through text-gray-400 pl-2 ">$45.00</span>
            </p>
          </div>
          <div className="">
            {" "}
            <Image src={shopImg3} alt=""></Image>
            <p className=" p text-[#0D0D0D] py-2 ">Fresh Lime</p>
            <p className=" p-sm text-[#ff9f0d] ">
              $28.00
              <span className=" line-through text-gray-400 pl-2 ">$45.00</span>
            </p>
          </div>
          <div className="">
            {" "}
            <Image src={shopImg4} alt=""></Image>
            <p className=" p text-[#0D0D0D] py-2 ">Fresh Lime</p>
            <p className=" p-sm text-[#ff9f0d] ">
              $28.00
              <span className=" line-through text-gray-400 pl-2 ">$45.00</span>
            </p>
          </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
