"use client";

import Image from "next/image";
import cartImg1 from "../assets/cartImg1.png";
import cartImg2 from "../assets/cartImg2.png";
import cartImg3 from "../assets/cartImg3.png";
import cartImg4 from "../assets/cartImg4.png";
import cartImg5 from "../assets/cartImg5.png";
import { FaStar } from "react-icons/fa";

export default function ShopingCart() {
  return (
    <div className=" xl:min-w-[1025px] xl:max-w-[1440px] 2xl:min-w-[1441px] 2xl:max-w-[1920px] mx-auto px-[0.5px]  ">
      <div className=" w-[1320px]  mx-auto flex flex-col gap-24 py-24 ">
        <div className="  ">
          <div className="flex justify-between ">
            <p className=" p-sm font-semibold text-black  ">Product</p>
            <p className=" p-sm font-semibold text-black  ">Price</p>
            <p className=" p-sm font-semibold text-black  ">Quantity</p>
            <p className=" p-sm font-semibold text-black  ">Total</p>
            <p className=" p-sm font-semibold text-black  ">Remove</p>
          </div> 
          <div className=" flex flex-col gap-4 ">
            <div className=" h-[115px] flex justify-between items-center border-b-[1px] border-gray-400 ">
              <div className=" flex gap-1 ">
                <Image src={cartImg1} alt="" className=" size-[100px] " ></Image>
                <div className=" flex flex-col gap-1">
                  <p className=" p-sm font-semibold text-black ">Burger</p>
                  <div className=" flex items-center text-[#ff9f0d] ">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
              <p className=" p-sm text-black ">$35.00</p>
              <p className=" p-sm text-black ">$35.00</p>
              <p className=" p-sm text-black ">$35.00</p>
              <p className=" p-sm text-black ">$35.00</p>
            </div>
            <div className=" h-[115px] flex justify-between items-center border-b-[1px] border-gray-400 ">
              <div className=" flex gap-1 ">
                <Image src={cartImg2} alt="" className=" size-[100px] " ></Image>{" "}
                <div className=" flex flex-col gap-1">
                  {" "}
                  <p className=" p-sm font-semibold text-black ">Burger</p>
                  <div className=" flex items-center text-[#ff9f0d] ">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
              <p className=" p-sm text-black ">$35.00</p>
              <p className=" p-sm text-black ">$35.00</p>
              <p className=" p-sm text-black ">$35.00</p>
              <p className=" p-sm text-black ">$35.00</p>
            </div>
            <div className=" h-[115px] flex justify-between items-center border-b-[1px] border-gray-400 ">
              <div className=" flex gap-1 ">
                <Image src={cartImg3} alt="" className=" size-[100px] " ></Image>{" "}
                <div className=" flex flex-col gap-1">
                  {" "}
                  <p className=" p-sm font-semibold text-black ">Burger</p>
                  <div className=" flex items-center text-[#ff9f0d] ">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
              <p className=" p-sm text-black ">$35.00</p>
              <p className=" p-sm text-black ">$35.00</p>
              <p className=" p-sm text-black ">$35.00</p>
              <p className=" p-sm text-black ">$35.00</p>
            </div>
            <div className=" h-[115px] flex justify-between items-center border-b-[1px] border-gray-400 ">
              <div className=" flex gap-1 ">
                <Image src={cartImg4} alt="" className=" size-[100px] " ></Image>{" "}
                <div className=" flex flex-col gap-1">
                  {" "}
                  <p className=" p-sm font-semibold text-black ">Burger</p>
                  <div className=" flex items-center text-[#ff9f0d] ">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
              <p className=" p-sm text-black ">$35.00</p>
              <p className=" p-sm text-black ">$35.00</p>
              <p className=" p-sm text-black ">$35.00</p>
              <p className=" p-sm text-black ">$35.00</p>
            </div>
            <div className=" h-[115px] flex justify-between items-center border-b-[1px] border-gray-400 ">
              <div className=" flex gap-1 ">
                <Image src={cartImg5} alt="" className=" size-[100px] " ></Image>{" "}
                <div className=" flex flex-col gap-1">
                  {" "}
                  <p className=" p-sm font-semibold text-black ">Burger</p>
                  <div className=" flex items-center text-[#ff9f0d] ">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </div>
              </div>
              <p className=" p-sm text-black ">$35.00</p>
              <p className=" p-sm text-black ">$35.00</p>
              <p className=" p-sm text-black ">$35.00</p>
              <p className=" p-sm text-black ">$35.00</p>
            </div>
          </div>
        </div>

        <div className=" flex justify-between ">
          <div className=" flex flex-col gap-4 ">
            <h4 className=" h4 text-[#0d0d0d] font-semibold ">Coupon Code</h4>
            <div className=" border-[1px] border-gray-200 rounded-lg w-[650px] h-[190px] p-4 flex flex-col gap-4 ">
              <p className=" p text-gray-500">
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                placeat quia! Magni illum dolorum accusamus rem aut sit dolorem
                doloremque? Inventore ipsam ducimus culpa vero eaque nostrum
                dolorem distinctio recusandae?{" "}
              </p>
              <div className=" flex h-[40px] ">
              <input
                placeholder="Enter your coupon code"
                type="text"
                className=" w-full  h-[60px] border-[1px] border-gray-200 rounded-lg text-[#0d0d0d] p-4 "
              ></input>
              <button className=" w-[100px] h-[60px] bg-[#ff9f0d] text-white rounded-lg ">
                Apply
              </button>
              </div>
            </div>
          </div>
          <div className=" flex flex-col gap-4 ">
            <h4 className=" h4 text-[#0d0d0d] font-semibold ">Total Bill</h4>
            <div className=" border-[1px] border-gray-200 rounded-lg w-[650px]  p-4 flex flex-col gap-4 ">
              
              <div className=" flex justify-between ">
                <p className=" p font-semibold  text-[#0d0d0d]">Cart Subtotal</p>
                <p className=" p font-semibold text-[#0d0d0d]">$120.00</p>
              </div>
              <div className=" flex justify-between ">
                <p className=" p text-gray-500">Shipping Charges</p>
                <p className=" p text-gray-500">$100.00</p>
              </div>
              <hr />
              <div className=" flex justify-between ">
                <p className=" p font-semibold text-[#0d0d0d]">Total Amount</p>
                <p className=" p font-semibold text-[#0d0d0d]">$220.00</p>
              </div>
              
            </div><button className=" w-full h-[60px] bg-[#ff9f0d] text-white rounded-lg ">
                Proceed to Checkout
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}
