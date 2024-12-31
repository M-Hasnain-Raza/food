"use client";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { LuAlignJustify } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";

import heroImage from "../assets/heroImage.png";
import Image from "next/image";


const navigation = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "Blog", href: "/blog" },
  { name: "Pages", href: "#" },
  { name: "About", href: "#" },
  { name: "Shop List", href: "/shoplist" },
  { name: "Shop Details", href: "/shopdetails" },
];

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className=" heroSectionBg  max-w-[1440px] mx-auto h-[680px] bg-cover -z-10 ">
      <div className="w-full h-full bg-[#0D0D0D] opacity-90 ">
        <header className="h-[87px]  ">
          <div className=" w-full">
            <div className=" max-w-[1020px] mx-auto py-8">
              <div>
                <h1 className=" text-center text-[20px] leading-[28px] ">
                  <span style={{ color: "#ff9f0d" }}>Food</span>tuck
                </h1>
              </div>
              <nav
                aria-label="Global"
                className="flex items-center justify-between "
              >
                {/* toggle button */}
                <div className="flex lg:hidden">
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(true)}
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                  >
                    <span className="sr-only">Open main menu</span>
                    <LuAlignJustify aria-hidden="true" className="size-6" />
                  </button>
                </div>

                {/* navbar Buttons */}
                <div className="hidden lg:flex lg:gap-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-sm/6  text-white"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>

                {/* nav searchBar and Bag Button */}
                <div className="hidden lg:flex lg:justify-end">
                  <div className=" searchBar relative ">
                  <input
                    type="search"
                    placeholder="Search..."
                    id=""
                    className=" p-2 border-[0.4px] border-[#ff9f0d] bg-transparent rounded-full mx-2 w-[250px] h-[50px] "
                  />
                  <FiSearch className=" absolute right-6 top-[12px] text-[24px] "></FiSearch>
                  </div>

                  <a href="/shopingcart" className=" shoppingBag text-sm/6 font-semibold text-white ">
                    <HiOutlineShoppingBag className=" my-3 text-[24px] "/>
                  </a>
                </div>
              </nav>
            </div>
            <div className="flex heroSection justify-between max-w-[1280px] mx-auto ">
                <div className="flex verticalLineAndHerotext">
                  <div className=" verticalLine flex flex-col ms-10 items-end ">
                    <div className=" h-[120px] border-r-[1px] border-gray-500 w-0 me-2"></div>
                    <div className=" align-middle gap-7 flex flex-col py-7 ">
                      <FaFacebookF></FaFacebookF>
                      <FaTwitter className=" text-[#ff9f0d]"></FaTwitter>
                      <FaPinterestP></FaPinterestP>
                    </div>
                    <div className=" h-[120px] border-r-[1px] border-gray-500 w-0 me-2"></div>

                  </div>
                    <div className=" herotext pl-8 pt-16 ">
                      <h4 className=" text-[#ff9f0d] h4 ">Its Quick & Amusing!</h4>
                      <h1 className=" h1 text-[#FFFFFF] "><span className=" text-[#ff9f0d]">Th</span>e Art of speed <br />
                      food Quality</h1>
                      <p className=" p-sm py-4 "> Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                      Varius sed pharetra dictum neque massa congue</p>
                      <button className=" bg-[#ff9f0d] rounded-full w-[150px] h-[50px] ">See Menu</button>
                    </div>
                </div>
             
              <div className=" heroimage">
                <Image src={heroImage} alt="" className=" xl:max-w-[42rem]  " ></Image>
              </div>
            </div>
          </div>

          {/* mobile screen */}

          <div className=" mobileScreen ">
            <Dialog
              open={mobileMenuOpen}
              onClose={setMobileMenuOpen}
              className="lg:hidden"
            >
              <div className="fixed inset-0 z-50" />
              <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div className="flex items-center justify-between">
                  <a href="#" className="-m-1.5 p-1.5">
                    <span className="sr-only">Your Company</span>
                    <Image
                      alt=""
                      src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                      className="h-8 w-auto"
                    />
                  </a>
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  >
                    <span className="sr-only">Close menu</span>
                    <RxCross2 aria-hidden="true" className="size-6" />
                  </button>
                </div>
                <div className="mt-6 flow-root">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-2 py-6">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold  bg-gray-50"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <div className="py-6">
                      <a
                        href="#"
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        Log in
                      </a>
                    </div>
                  </div>
                </div>
              </DialogPanel>
            </Dialog>
          </div>
        </header>
      </div>
    </div>
  );
}
