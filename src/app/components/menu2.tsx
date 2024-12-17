"use client";

import Image from "next/image";
import menu2Img1 from "../assets/menu2Img1.png";
import menu2Img2 from "../assets/menu2Img2.png";
import partnersImg1 from "../assets/partnersImg1.png";
import partnersImg2 from "../assets/partnersImg2.png";
import partnersImg3 from "../assets/partnersImg3.png";
import partnersImg4 from "../assets/partnersImg4.png";
import partnersImg5 from "../assets/partnersImg5.png";
import partnersImg6 from "../assets/partnersImg6.png";



import { PiCoffee } from "react-icons/pi";

export default function Menu2() {
  return (
        <div className=" max-w-[1320px] mx-auto flex flex-col gap-20 py-20 ">
      <div className=" max-h-[630px] flex justify-between">
        <Image src={menu2Img1} alt=""></Image>
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
        <Image src={menu2Img2} alt=""></Image>
      </div>

      <div className=" w-[1320px] h-[280px] text-center py-6 ">
        <p className=" p text-[#0D0D0D]">Partners & Clients</p>
        <h2 className=" h2 text-[#0D0D0D] ">We work with the best pepole</h2>
        <div className=" flex justify-between pt-10 " >
            <Image src={partnersImg1} alt=""></Image>
            <Image src={partnersImg2} alt=""></Image>
            <Image src={partnersImg3} alt=""></Image>
            <Image src={partnersImg4} alt=""></Image>
            <Image src={partnersImg5} alt=""></Image>
            <Image src={partnersImg6} alt=""></Image>
        </div>
      </div>

    </div>
  );
}
