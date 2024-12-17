"use client";

import Image from "next/image";
import Link from "next/link";

import shopImg1 from "../assets/shopImg1.png";
import shopImg2 from "../assets/shopImg2.png";
import shopImg3 from "../assets/shopImg3.png";
import shopImg4 from "../assets/shopImg4.png";
import shopImg5 from "../assets/shopImg5.png";
import shopImg6 from "../assets/shopImg6.png";
import shopImg7 from "../assets/shopImg7.png";
import shopImg8 from "../assets/shopImg8.png";
import shopImg9 from "../assets/shopImg9.png";
import shopNowImg from "../assets/shopNowImg.png";
import shopLatestImg from "../assets/shopLatestImg.png";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { RiArrowDownSLine } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { FaAngleDoubleLeft } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";


export default function ShopList() {
  return (
    <div className=" max-w-[1320px] mx-auto flex flex-col gap-4 py-20 ">
      <div className="  h-[46px]  flex ">
        <div className=" sortBySearchFilter flex  items-center ">
          <h1 className=" h4 text-[#0D0D0D] ">Sort By:</h1>

          <Menu as="div" className="relative px-6 inline-block ">
            <div>
              <MenuButton className="inline-flex w-full items-baseline  gap-x-28 rounded-md bg-white px-3 py-2 h5 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                Newest
                <RiArrowDownSLine
                  aria-hidden="true"
                  className="-mr-1 size-5 text-gray-400"
                />
              </MenuButton>
            </div>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="py-1">
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                  >
                    Account settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                  >
                    Support
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                  >
                    License
                  </a>
                </MenuItem>
                <form action="#" method="POST">
                  <MenuItem>
                    <button
                      type="submit"
                      className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                    >
                      Sign out
                    </button>
                  </MenuItem>
                </form>
              </div>
            </MenuItems>
          </Menu>
        </div>
        <div>
          <div className=" showSearchFilter flex  items-center ">
            <h1 className=" h4 text-[#0D0D0D] ">Show:</h1>

            <Menu as="div" className="relative px-6 inline-block ">
              <div>
                <MenuButton className="inline-flex w-full items-baseline  gap-x-28 rounded-md bg-white px-3 py-2 h5 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                  Default
                  <RiArrowDownSLine
                    aria-hidden="true"
                    className="-mr-1 size-5 text-gray-400"
                  />
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <div className="py-1">
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                    >
                      Account settings
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                    >
                      Support
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                    >
                      License
                    </a>
                  </MenuItem>
                  <form action="#" method="POST">
                    <MenuItem>
                      <button
                        type="submit"
                        className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900 data-[focus]:outline-none"
                      >
                        Sign out
                      </button>
                    </MenuItem>
                  </form>
                </div>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <div className=" flex justify-between">
        <div className=" flex flex-col items-center">
        <div className=" w-[985px] h-[1925px]  flex flex-wrap gap-[24px] ">
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
          <div className="">
            {" "}
            <Image src={shopImg5} alt=""></Image>
            <p className=" p text-[#0D0D0D] py-2 ">Fresh Lime</p>
            <p className=" p-sm text-[#ff9f0d] ">
              $28.00
              <span className=" line-through text-gray-400 pl-2 ">$45.00</span>
            </p>
          </div>
          <div className="">
            {" "}
            <Image src={shopImg6} alt=""></Image>
            <p className=" p text-[#0D0D0D] py-2 ">Fresh Lime</p>
            <p className=" p-sm text-[#ff9f0d] ">
              $28.00
              <span className=" line-through text-gray-400 pl-2 ">$45.00</span>
            </p>
          </div>
          <div className="">
            {" "}
            <Image src={shopImg7} alt=""></Image>
            <p className=" p text-[#0D0D0D] py-2 ">Fresh Lime</p>
            <p className=" p-sm text-[#ff9f0d] ">
              $28.00
              <span className=" line-through text-gray-400 pl-2 ">$45.00</span>
            </p>
          </div>
          <div className="">
            {" "}
            <Image src={shopImg8} alt=""></Image>
            <p className=" p text-[#0D0D0D] py-2 ">Fresh Lime</p>
            <p className=" p-sm text-[#ff9f0d] ">
              $28.00
              <span className=" line-through text-gray-400 pl-2 ">$45.00</span>
            </p>
          </div>
          <div className="">
            {" "}
            <Image src={shopImg9} alt=""></Image>
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
          <div className="">
            {" "}
            <Image src={shopImg5} alt=""></Image>
            <p className=" p text-[#0D0D0D] py-2 ">Fresh Lime</p>
            <p className=" p-sm text-[#ff9f0d] ">
              $28.00
              <span className=" line-through text-gray-400 pl-2 ">$45.00</span>
            </p>
          </div>
          <div className="">
            {" "}
            <Image src={shopImg6} alt=""></Image>
            <p className=" p text-[#0D0D0D] py-2 ">Fresh Lime</p>
            <p className=" p-sm text-[#ff9f0d] ">
              $28.00
              <span className=" line-through text-gray-400 pl-2 ">$45.00</span>
            </p>
          </div>
          <div className="">
            {" "}
            <Image src={shopImg7} alt=""></Image>
            <p className=" p text-[#0D0D0D] py-2 ">Fresh Lime</p>
            <p className=" p-sm text-[#ff9f0d] ">
              $28.00
              <span className=" line-through text-gray-400 pl-2 ">$45.00</span>
            </p>
          </div>
          <div className="">
            {" "}
            <Image src={shopImg8} alt=""></Image>
            <p className=" p text-[#0D0D0D] py-2 ">Fresh Lime</p>
            <p className=" p-sm text-[#ff9f0d] ">
              $28.00
              <span className=" line-through text-gray-400 pl-2 ">$45.00</span>
            </p>
          </div>
          <div className="">
            {" "}
            <Image src={shopImg9} alt=""></Image>
            <p className=" p text-[#0D0D0D] py-2 ">Fresh Lime</p>
            <p className=" p-sm text-[#ff9f0d] ">
              $28.00
              <span className=" line-through text-gray-400 pl-2 ">$45.00</span>
            </p>
          </div>
        </div>
        <div className=" pagination ">
      <nav className="isolate inline-flex rounded-md shadow-sm " aria-label="Pagination">
        <a href="#" className=" inline-flex items-center rounded-l-md px-2 py-2 text-[#ff9f0d] ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
          <span className="sr-only">Previous</span>
          <FaAngleDoubleLeft/>
        </a>
         {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
        <a href="#" className=" inline-flex items-center px-4 py-2 text-sm font-semibold text-[#ff9f0d] ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">1</a>
        <a href="#" aria-current="page" className="relative z-10 inline-flex items-center bg-[#ff9f0d] px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">2</a>

        <a href="#" className=" hidden items-center px-4 py-2 text-sm font-semibold text-[#ff9f0d] ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">3</a>
        <a href="#" className=" inline-flex items-center rounded-r-md px-2 py-2 text-[#ff9f0d] ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
          <span className="sr-only">Next</span>
          <FaAngleDoubleRight/>
        </a>
      </nav>
        </div>
        </div>




        <div className=" w-[315px] h-[1490px] border-[0.5px] border-gray-300 rounded-xl ">
          <div className=" searchBar flex py-7 max-w-[250px] mx-auto font-[sans-serif]">
            <input
              type="email"
              placeholder="Search Product"
              className="w-full outline-none bg-[#fff5e7] text-gray-600 text-sm px-4 py-3"
            />
            <button
              type="button"
              className="flex items-center justify-center bg-[#ff9f0d] px-4"
            >
              <FiSearch></FiSearch>
            </button>
          </div>

          <div className=" checkeBoxes h-[375px] w-[250px] mx-auto flex flex-col gap-2 ">
            <h6 className=" h6 text-[#0D0D0D]">Category</h6>
            <div className=" flex items-center h-[26px] ">
              <input type="checkbox" name="" id="" />
              <p className=" text-[#0D0D0D] pl-2 ">Sandwiches</p>
            </div>
            <div className=" flex items-center h-[26px] ">
              <input type="checkbox" name="" id="" />
              <p className=" text-[#0D0D0D] pl-2 ">Burger</p>
            </div>
            <div className=" flex items-center h-[26px] ">
              <input type="checkbox" name="" id="" />
              <p className=" text-[#0D0D0D] pl-2 ">Chicken Chup</p>
            </div>{" "}
            <div className=" flex items-center h-[26px] ">
              <input type="checkbox" name="" id="" />
              <p className=" text-[#0D0D0D] pl-2 ">Drink</p>
            </div>{" "}
            <div className=" flex items-center h-[26px] ">
              <input type="checkbox" name="" id="" />
              <p className=" text-[#0D0D0D] pl-2 ">Pizza</p>
            </div>{" "}
            <div className=" flex items-center h-[26px] ">
              <input type="checkbox" name="" id="" />
              <p className=" text-[#0D0D0D] pl-2 ">Thi</p>
            </div>{" "}
            <div className=" flex items-center h-[26px] ">
              <input type="checkbox" name="" id="" />
              <p className=" text-[#0D0D0D] pl-2 ">Non Veg</p>
            </div>{" "}
            <div className=" flex items-center h-[26px] ">
              <input type="checkbox" name="" id="" />
              <p className=" text-[#0D0D0D] pl-2 ">Uncategorized</p>
            </div>
            <Image src={shopNowImg} alt="" className=" py-5"></Image>
            <div  className=" w-[250px]  ">
              <p className=" p text-[#0D0D0D] ">Filter By Price</p>
              <input type="range"  className=" w-full " />
              <div className="w-full flex justify-between  ">
              <p className=" p-sm text-gray-600  ">From $0 to $8000 
              </p>
              <p className=" p-sm text-gray-600  ">Filter 
              </p>
              
              </div>

            </div>

<div className=" w-[250px] h-[370px] flex flex-col gap-5 ">
  <h6 className=" text-[#0D0D0D]  h6">Latest Products</h6>
  <div className=" flex "> <Image src={shopLatestImg} alt=""></Image><div className=" flex flex-col gap-[2px] pl-2  "><p className=" p-sm text-[#0D0D0D] ">Pizza</p><div className=" flex text-[#ff9f0d] "><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div><p className=" p-sm text-[#0D0D0D] ">$35.00</p></div></div>
  <div className=" flex "> <Image src={shopLatestImg} alt=""></Image><div className=" flex flex-col gap-[2px] pl-2  "><p className=" p-sm text-[#0D0D0D] ">Pizza</p><div className=" flex text-[#ff9f0d] "><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div><p className=" p-sm text-[#0D0D0D] ">$35.00</p></div></div>
  <div className=" flex "> <Image src={shopLatestImg} alt=""></Image><div className=" flex flex-col gap-[2px] pl-2  "><p className=" p-sm text-[#0D0D0D] ">Pizza</p><div className=" flex text-[#ff9f0d] "><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div><p className=" p-sm text-[#0D0D0D] ">$35.00</p></div></div>
  <div className=" flex "> <Image src={shopLatestImg} alt=""></Image><div className=" flex flex-col gap-[2px] pl-2  "><p className=" p-sm text-[#0D0D0D] ">Pizza</p><div className=" flex text-[#ff9f0d] "><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></div><p className=" p-sm text-[#0D0D0D] ">$35.00</p></div></div>
</div>

<div className=" h-[165px] w-[250px] text-[#0D0D0D] py-8 ">
  <p className=" p pb-4 ">Product Tags</p>
  <div className=" flex flex-wrap gap-4 ">
    <Link rel="stylesheet" href="#" >Services</Link>
    <Link rel="stylesheet" href="#" >Our Menu</Link>
    <Link rel="stylesheet" href="#" >Pizza</Link>
    <Link rel="stylesheet" href="#" >Cupcakes</Link>
    <Link rel="stylesheet" href="#" className=" text-[#ff9f0d] border-b border-[#ff9f0d] " >Services</Link>
    <Link rel="stylesheet" href="#" >Cookies</Link>
    <Link rel="stylesheet" href="#" >Our Shop</Link>
    <Link rel="stylesheet" href="#" >Tandoori Chicken</Link>
    
  </div>
</div>

          </div>
        </div>
      </div>
    </div>
  );
}
