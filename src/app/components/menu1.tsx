"use client";

import Image from "next/image";
import menu1Img1 from "../assets/menu1Img1.png";
import menu1Img2 from "../assets/menu1Img2.png";
import { PiCoffee } from "react-icons/pi";

export default function Menu1() {
  return (
        <div className=" max-w-[1320px] mx-auto flex flex-col gap-20 py-20 ">
      <div className=" max-h-[630px] flex justify-between">
        <Image src={menu1Img1} alt=""></Image>
        <div className=" w-[760px] flex flex-col justify-center gap-10 ">
          <div>
            <PiCoffee className=" text-4xl text-[#ff9f0d] "></PiCoffee>
            <h2 className=" h2 text-[#0D0D0D] ">Starter Menu</h2>
          </div>
          <div className=" flex justify-between border-b border-dashed ">
            <div>
              <h5 className=" h5 text-[#0D0D0D] ">
                Alder Grilled Chinook Salmon
              </h5>
              <p className=" p-sm text-[#4F4F4F]  ">
                Toasted French bread topped with romano, cheddar
              </p>
              <p className=" p-sm text-[#4F4F4F] ">560 CAL</p>
            </div>
            <h5 className=" h5  text-[#ff9f0d] ">32$</h5>
          </div>
          <div className=" flex justify-between border-b border-dashed ">
            <div>
              <h5 className=" h5 text-[#ff9f0d] ">
              Berries and creme tart
              </h5>
              <p className=" p-sm text-[#4F4F4F]  ">
              Gorgonzola, ricotta, mozzarella, taleggio
              </p>
              <p className=" p-sm text-[#4F4F4F] ">700 CAL</p>
            </div>
            <h5 className=" h5  text-[#ff9f0d] ">43$</h5>
          </div>
          <div className=" flex justify-between border-b border-dashed ">
            <div>
              <h5 className=" h5 text-[#0D0D0D] ">
              Tormentoso Bush Pizza Pintoage
              </h5>
              <p className=" p-sm text-[#4F4F4F]  ">
              Ground cumin, avocados, peeled and cubed
              </p>
              <p className=" p-sm text-[#4F4F4F] ">1000 CAL</p>
            </div>
            <h5 className=" h5  text-[#ff9f0d] ">14$</h5>
          </div>
          <div className=" flex justify-between border-b border-dashed ">
            <div>
              <h5 className=" h5 text-[#0D0D0D] ">
              Spicy Vegan Potato Curry
              </h5>
              <p className=" p-sm text-[#4F4F4F]  ">
              Spreadable cream cheese, crumbled blue cheese              </p>
              <p className=" p-sm text-[#4F4F4F] ">560 CAL</p>
            </div>
            <h5 className=" h5  text-[#ff9f0d] ">35$</h5>
          </div>
        </div>
      </div>
      <div className=" max-h-[630px] flex justify-between">
        <div className=" w-[760px] flex flex-col justify-center gap-10 ">
          <div>
            <PiCoffee className=" text-4xl text-[#ff9f0d] "></PiCoffee>
            <h2 className=" h2 text-[#0D0D0D] ">Starter Menu</h2>
          </div>
          <div className=" flex justify-between border-b border-dashed ">
            <div>
              <h5 className=" h5 text-[#0D0D0D] ">
                Alder Grilled Chinook Salmon
              </h5>
              <p className=" p-sm text-[#4F4F4F]  ">
                Toasted French bread topped with romano, cheddar
              </p>
              <p className=" p-sm text-[#4F4F4F] ">560 CAL</p>
            </div>
            <h5 className=" h5  text-[#ff9f0d] ">32$</h5>
          </div>
          <div className=" flex justify-between border-b border-dashed ">
            <div>
              <h5 className=" h5 text-[#ff9f0d] ">
              Berries and creme tart
              </h5>
              <p className=" p-sm text-[#4F4F4F]  ">
              Gorgonzola, ricotta, mozzarella, taleggio
              </p>
              <p className=" p-sm text-[#4F4F4F] ">700 CAL</p>
            </div>
            <h5 className=" h5  text-[#ff9f0d] ">43$</h5>
          </div>
          <div className=" flex justify-between border-b border-dashed ">
            <div>
              <h5 className=" h5 text-[#0D0D0D] ">
              Tormentoso Bush Pizza Pintoage
              </h5>
              <p className=" p-sm text-[#4F4F4F]  ">
              Ground cumin, avocados, peeled and cubed
              </p>
              <p className=" p-sm text-[#4F4F4F] ">1000 CAL</p>
            </div>
            <h5 className=" h5  text-[#ff9f0d] ">14$</h5>
          </div>
          <div className=" flex justify-between border-b border-dashed ">
            <div>
              <h5 className=" h5 text-[#0D0D0D] ">
              Spicy Vegan Potato Curry
              </h5>
              <p className=" p-sm text-[#4F4F4F]  ">
              Spreadable cream cheese, crumbled blue cheese              </p>
              <p className=" p-sm text-[#4F4F4F] ">560 CAL</p>
            </div>
            <h5 className=" h5  text-[#ff9f0d] ">35$</h5>
          </div>
        </div>
        <Image src={menu1Img2} alt=""></Image>
      </div>
    </div>
  );
}
