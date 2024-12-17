"use clients";

import Image from "next/image";

import shopDetailsImg1 from "../assets/shopDetailsImg1.png";
import shopDetailsImg2 from "../assets/shopDetailsImg2.png";
import shopDetailsImg3 from "../assets/shopDetailsImg3.png";
import shopDetailsImg4 from "../assets/shopDetailsImg4.png";
import shopDetailsImg5 from "../assets/shopDetailsImg5.png";

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

export default function ShopDetails() {
  return (
    <div className=" w-[1920px] mx-auto py-12 ">
      <div className=" w-[1320px] mx-auto flex flex-col gap-8 py-8 ">
        <div className=" w-full h-[720px] flex justify-between   ">
          <div className=" w-[650px] flex justify-between ">
            <div className=" flex flex-col gap-3 ">
              <Image src={shopDetailsImg1} alt=""></Image>
              <Image src={shopDetailsImg2} alt=""></Image>
              <Image src={shopDetailsImg3} alt=""></Image>
              <Image src={shopDetailsImg4} alt=""></Image>
            </div>
            <div>
              <Image src={shopDetailsImg5} alt=""></Image>
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

              <h2 className=" h2 text-[#0D0D0D]   ">Yummy Chicken Chup</h2>
              <p className=" p text-gray-500 pb-8 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam <br /> pellentesque bibendum non dui volutpat fringilla
                bibendum. Urna, urna, <br /> vitae feugiat pretium donec id
                elementum. Ultrices mattis sed vitae <br /> mus risus. Lacus
                nisi, et ac dapibus sit eu velit in consequat.
              </p>
            </div>
            <div className=" flex flex-col gap-4 py-8 border-b border-gray-300 ">
              <h4 className=" h4 text-[#0D0D0D]  ">54.00$</h4>
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
                <button className=" w-[190px] h-[50px] bg-[#ff9f0d] inline-flex gap-3 items-center justify-center ">
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
              <p className="  text-gray-500  ">Category: Pizza</p>
              <p className="  text-gray-500  ">Tag: Our Shop</p>
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
            <ol>
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
