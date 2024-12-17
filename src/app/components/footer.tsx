"use import";

import Image from "next/image";
import footerImg1 from "../assets/footerImg1.png";
import footerImg2 from "../assets/footerImg2.png";
import footerImg3 from "../assets/footerImg3.png";
import footerBg from "../assets/footerBg.png";
import footerSocial from "../assets/footerSocial.png";

import { PiClockClockwise } from "react-icons/pi";

export default function Footer() {
  return (
    <div className=" bg-[#0D0D0D] max-w-[1920px] mx-auto h-[824px] p-[1px] relative ">
      <div className=" max-w-[1320px]  mx-auto pt-20 ">
        <div className=" max-w-[1170px] mx-auto h-[145px] border-b border-[#ff9f0d] flex justify-between ">
          <div>
            <h2 className=" text-[48px] leading-[56px] ">
              <span className=" text-[#ff9f0d] ">St</span>ill You Need Our
              Support ?
            </h2>
            <p className=" text-[16px] leading-[24px] py-2 ">
              Don’t wait make a smart & logical quote here. Its pretty easy.
            </p>
          </div>
          <div className=" w-[460px] h-[56px] flex p-[1px] ">
            <input
              type="text"
              className="bg-[#ff9f0d] text-white w-[300px] h-full pl-3 "
              placeholder="Enter Your Email"
            />
            <button className=" w-[160px] h-full bg-white text-[#ff9f0d]   ">
              Subscribe Now
            </button>
          </div>
        </div>

        <div className=" h-[500px] flex items-center ">
          <div className="flex justify-between w-full ">
          <div className=" flex  flex-col gap-8 ">
            <h5 className=" text-[24px] leading-[32px] ">About Us</h5>
            <p className=" text-[16px] leading-[24px]  ">
              orporate clients and leisure travelers has <br /> been relying on
              Groundlink for dependab <br /> safe, and professional chauffeured
              car <br />
              service in major cities across World.
            </p>
            <div className=" flex items-center ">
              <div className=" w-[78px] h-[72px] bg-[#ff9f0d] flex justify-center items-center text-5xl rounded ">
                <PiClockClockwise></PiClockClockwise>
              </div>
              <div className=" pl-4 ">
                {" "}
                <p className=" text-[18px] leading-[26px] ">Opening Houres</p>
                <p className=" text-[14px] leading-[22px] ">
                  Mon - Sat(8.00 - 6.00)
                </p>
                <p className=" text-[14px] leading-[22px]  ">
                  Sunday - Closed{" "}
                </p>{" "}
              </div>
            </div>
          </div>
          <div className=" flex  flex-col gap-4 ">
            {" "}
            <h5 className=" text-[24px] leading-[32px] ">Useful Links</h5>
            <p className=" text-[20px] leading-[28px] ">About</p>
            <p className=" text-[20px] leading-[28px] ">News</p>
            <p className=" text-[20px] leading-[28px] ">Partners</p>
            <p className=" text-[20px] leading-[28px] ">Team</p>
            <p className=" text-[20px] leading-[28px] ">Menu</p>
            <p className=" text-[20px] leading-[28px] ">Contacts</p>
          </div>

          <div className=" flex  flex-col gap-4 ">
            {" "}
            <h5 className=" text-[24px] leading-[32px] ">Help?</h5>
            <p className=" text-[20px] leading-[28px] ">FAQ</p>
            <p className=" text-[20px] leading-[28px] ">Term & conditions</p>
            <p className=" text-[20px] leading-[28px] ">Reporting</p>
            <p className=" text-[20px] leading-[28px] ">Documentation</p>
            <p className=" text-[20px] leading-[28px] ">Support Policy</p>
            <p className=" text-[20px] leading-[28px] ">Privacy</p>
          </div>

          <div  className=" flex flex-col gap-4 " >
            <h5 className=" text-[24px] leading-[32px] ">Recent Post</h5>


              <div className=" flex">
                <Image
                  src={footerImg1}
                  alt=""
                  className=" w-[55px] "
                ></Image>
                <div className=" flex flex-col pl-2  ">
                  <p className=" text-[14px] leading-[22px] ">20 Feb 2022</p>
                  <h6 className=" text-[20px] leading-[28px] ">
                    Keep Your Business
                  </h6>
                  </div>
                </div>

                <div className=" flex">
                  {" "}
                  <Image
                    src={footerImg2}
                    alt=""
                    className=" w-[55px] "
                  ></Image>{" "}
                  <div className=" flex flex-col pl-2  ">
                    <p className=" text-[14px] leading-[22px] ">20 Feb 2022</p>
                    <h6 className=" text-[20px] leading-[28px] ">
                      Keep Your Business{" "}
                    </h6>
                    </div>
                  </div>

                  <div className=" flex">
                    {" "}
                    <Image
                      src={footerImg3}
                      alt=""
                      className=" w-[55px] "
                    ></Image>{" "}
                    <div className=" flex flex-col pl-2  ">
                      <p className=" text-[14px] leading-[22px] ">
                        20 Feb 2022
                      </p>
                      <h6 className=" text-[20px] leading-[28px] ">
                        Keep Your Business{" "}
                      </h6>
                    </div>
                  </div>
              
          </div> 
        </div>
        </div>

         </div>
        <div className=" h-[100px] bg-gray-600 ">
          <div className=" w-[1320px] h-full mx-auto flex justify-between items-center "> 
            <p className=" text-[22px] leading-[24px] ">Copyright © 2022 by Hasnain. All Rights Reserved.</p>
            <Image src={footerSocial} alt=""></Image>
          </div>
        </div>
        <Image src={footerBg} alt="" className=" absolute bottom-0 right-0"></Image>

    </div>
  );
}
 