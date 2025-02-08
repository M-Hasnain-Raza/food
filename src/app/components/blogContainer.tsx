import Image from "next/image";
import Link from "next/link";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { LiaCommentsSolid } from "react-icons/lia";
import { PiUserCirclePlus } from "react-icons/pi";
import { PiArrowLineUpRight } from "react-icons/pi";
import blogPgImg1 from "../assets/blogPgImg1.png";
import blogPgImg2 from "../assets/blogPgImg2.png";
import blogPgImg3 from "../assets/blogPgImg3.png";
import blogPgImg4 from "../assets/blogPgImg4.png";
import testimonalDp from "../assets/testimonalDp.png";
import shopLatestImg from "../assets/shopLatestImg.png";
import galleryImg1 from "../assets/galleryImg1.png";
import galleryImg2 from "../assets/galleryImg2.png";
import galleryImg3 from "../assets/galleryImg3.png";
import galleryImg4 from "../assets/galleryImg4.png";
import galleryImg5 from "../assets/galleryImg5.png";
import galleryImg6 from "../assets/galleryImg6.png"; 
import footerSocial from "../assets/footerSocial.png";
import { FiSearch } from "react-icons/fi";
import { FaFacebookF, FaStar, FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";

export default function BlogContainer() {
  return (
    <div className="xl:min-w-[1025px] xl:max-w-[1440px] 2xl:min-w-[1441px] 2xl:max-w-[1920px] mx-auto px-[0.5px]  ">
      <div className="2xl:max-w-[1320px] flex justify-between mx-auto">
        <div className="flex flex-col gap-4 2xl:max-w-[830px] py-20 ">
          <div className=" flex flex-col gap-4">
            <Image src={blogPgImg1} alt="" />
            <div className="flex items-center gap-4 text-gray-600 text-sm">
              <IoCalendarNumberOutline className=" text-[#ff9f0d] " />
              <span>June 14, 2021</span>
              <LiaCommentsSolid className=" text-[#ff9f0d] " />
              <span>12 Comments</span>
              <PiUserCirclePlus className=" text-[#ff9f0d] " />
              <span>John Doe</span>
            </div>
            <h5 className="h5 text-black font-bold">
              10 Reasons To Do A Digital Detox Challenge
            </h5>
            <hr />
            <p className="text-gray-600 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              imperdiet libero id nisi euismod, id ornare nisi tincidunt.
              Integer nec turpis auctor, lacinia nisl nec, ultrices lacus. Donec
              nec erat nec sapien tincidunt vulputate. Nullam vel scelerisque
              ligula.
            </p>
            <button className=" max-w-[172px] text-[#ff9f0d] border-[1px] border-[#ff9f0d] px-4 py-2 rounded-md inline-flex items-center justify-center gap-2 ">
              Read More <PiArrowLineUpRight />
            </button>
          </div>
          <div className=" flex flex-col gap-4">
            <Image src={blogPgImg2} alt="" />

            <div className="flex items-center gap-4 text-gray-600 text-sm">
              <IoCalendarNumberOutline className=" text-[#ff9f0d]" />
              <span>June 14, 2021</span>
              <LiaCommentsSolid className=" text-[#ff9f0d]" />
              <span>12 Comments</span>
              <PiUserCirclePlus className=" text-[#ff9f0d]" />
              <span>John Doe</span>
            </div>
            <h5 className="h5 text-black font-bold">
              Traditional Soft Pretzels with Sweet Beer Cheese
            </h5>
            <hr />
            <p className="text-gray-600 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              imperdiet libero id nisi euismod, id ornare nisi tincidunt.
              Integer nec turpis auctor, lacinia nisl nec, ultrices lacus. Donec
              nec erat nec sapien tincidunt vulputate. Nullam vel scelerisque
              ligula.
            </p>
            <button className=" max-w-[172px] border-[1px] border-[#ff9f0d] text-[#ff9f0d] inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md">
              Read More
              <PiArrowLineUpRight />
            </button>
          </div>
          <div className=" flex flex-col gap-4">
            <Image src={blogPgImg3} alt="" />
            <div className="flex items-center gap-4 text-gray-600 text-sm">
              <IoCalendarNumberOutline className=" text-[#ff9f0d]" />
              <span>June 14, 2021</span>
              <LiaCommentsSolid className=" text-[#ff9f0d]" />
              <span>12 Comments</span>
              <PiUserCirclePlus className=" text-[#ff9f0d]" />
              <span>John Doe</span>
            </div>
            <h5 className="h5 text-black font-bold">
              The Ultimate Hangover Burger: Egg in a Hole Burger
            </h5>
            <hr />
            <p className="text-gray-600 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              imperdiet libero id nisi euismod, id ornare nisi tincidunt.
              Integer nec turpis auctor, lacinia nisl nec, ultrices lacus. Donec
              nec erat nec sapien tincidunt vulputate. Nullam vel scelerisque
              ligula.
            </p>
            <button className=" max-w-[172px] border-[1px] border-[#ff9f0d] text-[#ff9f0d] inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md">
              Read More
              <PiArrowLineUpRight />
            </button>
          </div>
          <div className=" flex flex-col gap-4">
            <Image src={blogPgImg4} alt="" />
            <div className="flex items-center gap-4 text-gray-600 text-sm">
              <IoCalendarNumberOutline className=" text-[#ff9f0d]" />
              <span>June 14, 2021</span>
              <LiaCommentsSolid className=" text-[#ff9f0d]" />
              <span>12 Comments</span>
              <PiUserCirclePlus className=" text-[#ff9f0d]" />
              <span>John Doe</span>
            </div>
            <h5 className="h5 text-black font-bold">
              My Favorite Easy Black Pizza Toast Recipe
            </h5>
            <hr />
            <p className="text-gray-600 text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              imperdiet libero id nisi euismod, id ornare nisi tincidunt.
              Integer nec turpis auctor, lacinia nisl nec, ultrices lacus. Donec
              nec erat nec sapien tincidunt vulputate. Nullam vel scelerisque
              ligula.
            </p>
            <button className=" max-w-[172px] border-[1px] border-[#ff9f0d] text-[#ff9f0d] inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md">
              Read More
              <PiArrowLineUpRight />
            </button>
          </div>
        </div>
        <div className="2xl:w-[424px] py-20 flex flex-col gap-4">
          <div className="  searchBar h-[70px] flex ">
            <input
              type="email"
              placeholder="Search your keyword"
              className=" outline-none border-[1px] w-[349px] border-gray-300  text-gray-950 text-sm px-4 py-3"
            />
            <button
              type="button"
              className=" flex justify-center items-center text-[24px] bg-[#ff9f0d] w-[75px] "
            >
              <FiSearch></FiSearch>
            </button>
          </div>
          <div className="flex flex-col gap-4 justify-center items-center w-[424px] h-[420px] border-[1px] border-gray-300 ">
            <Image src={testimonalDp} alt="" className="  "></Image>
            <h6 className=" h6 font-semibold text-[#0d0d0d] ">Prince Miyako</h6>
            <p className="p text-gray-600">Blogger/Photographer</p>
            <div className=" flex items-center text-[#ff9f0d]  ">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <p className="p-sm text-gray-600"> (1 Review)</p>
            </div>
            <p className="p text-gray-600 text-center">
              Lorem ipsum dolor sit amet, consectetur <br /> adipisicing
              elit.Veritatis distinctio, odio <br /> eligendi suscipit
              reprehenderit atque
            </p>
            <div className="flex gap-4">
              <FaFacebookF className=" text-black" />
              <FaTwitter className=" text-black" />
              <IoLogoInstagram className=" text-black" />
              <FaPinterestP className=" text-black" />
            </div>
          </div>
          <div className="flex flex-col gap-4  p-7 w-[424px]  border-[1px] border-gray-300 ">
            <h5 className="h5 text-black font-bold text-center">
              Recent Posts
            </h5>
            <div className=" w-[250px] flex flex-col gap-5 ">
              <div className=" flex border-b-[1px] border-gray-300 py-3  ">
                {" "}
                <Image src={shopLatestImg} alt=""></Image>
                <div className=" flex flex-col gap-[2px] pl-2  ">
                  <p className=" p-sm text-[#0D0D0D] ">Pizza</p>
                  <div className=" flex text-[#ff9f0d] ">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p className=" p-sm text-[#0D0D0D] ">$35.00</p>
                </div>
              </div>
              <div className=" flex border-b-[1px] border-gray-300 py-3  ">
                {" "}
                <Image src={shopLatestImg} alt=""></Image>
                <div className=" flex flex-col gap-[2px] pl-2  ">
                  <p className=" p-sm text-[#0D0D0D] ">Pizza</p>
                  <div className=" flex text-[#ff9f0d] ">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p className=" p-sm text-[#0D0D0D] ">$35.00</p>
                </div>
              </div>
              <div className=" flex border-b-[1px] border-gray-300 py-3  ">
                {" "}
                <Image src={shopLatestImg} alt=""></Image>
                <div className=" flex flex-col gap-[2px] pl-2  ">
                  <p className=" p-sm text-[#0D0D0D] ">Pizza</p>
                  <div className=" flex text-[#ff9f0d] ">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p className=" p-sm text-[#0D0D0D] ">$35.00</p>
                </div>
              </div>
              <div className=" flex border-b-[1px] border-gray-300 py-3  ">
                {" "}
                <Image src={shopLatestImg} alt=""></Image>
                <div className=" flex flex-col gap-[2px] pl-2  ">
                  <p className=" p-sm text-[#0D0D0D] ">Pizza</p>
                  <div className=" flex text-[#ff9f0d] ">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p className=" p-sm text-[#0D0D0D] ">$35.00</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4  p-7 w-[424px]  border-[1px] border-gray-300 ">
            <h5 className="h5 text-black font-bold text-center">
              Filter By Menu
            </h5>
            <div className=" flex flex-col gap-5  font-semibold">
              <div className=" flex ">
                {" "}
                <Image src={shopLatestImg} alt=""></Image>
                <div className=" flex justify-between items-center w-full pl-3 ">
                  <p className=" p-sm text-[#0D0D0D] ">Pizza</p>
                  <p className=" p-sm text-[#0D0D0D] ">$35.00</p>
                </div>
              </div>
              <div className=" flex ">
                {" "}
                <Image src={shopLatestImg} alt=""></Image>
                <div className=" flex justify-between  items-center w-full pl-3  ">
                  <p className=" p-sm text-[#0D0D0D] ">Pizza</p>
                  <p className=" p-sm text-[#0D0D0D] ">$35.00</p>
                </div>
              </div>
              <div className=" flex ">
                {" "}
                <Image src={shopLatestImg} alt=""></Image>
                <div className=" flex justify-between  items-center w-full pl-3  ">
                  <p className=" p-sm text-[#0D0D0D] ">Pizza</p>
                  <p className=" p-sm text-[#0D0D0D] ">$35.00</p>
                </div>
              </div>
              <div className=" flex ">
                {" "}
                <Image src={shopLatestImg} alt=""></Image>
                <div className=" flex  justify-between  items-center w-full pl-3  ">
                  <p className=" p-sm text-[#0D0D0D] ">Pizza</p>
                  <p className=" p-sm text-[#0D0D0D] ">$35.00</p>
                </div>
              </div>
              <div className=" flex ">
                {" "}
                <Image src={shopLatestImg} alt=""></Image>
                <div className=" flex  justify-between  items-center w-full pl-3  ">
                  <p className=" p-sm text-[#0D0D0D] ">Pizza</p>
                  <p className=" p-sm text-[#0D0D0D] ">$35.00</p>
                </div>
              </div>
            </div>
          </div>
          <div className="  text-[#0D0D0D] py-7 border-[1px] border-gray-300  ">
              <h5 className="h5 text-black font-bold text-center">Product Tags</h5>

  <div className=" flex flex-wrap gap-4 justify-center p-8 ">
   <button className=" px-3 h-[40px] border-[1px] border-gray-300   "> <Link rel="stylesheet" href="#" >Services</Link></button>
   <button className=" px-3 h-[40px] border-[1px] border-gray-300   "> <Link rel="stylesheet" href="#" >Our Menu</Link></button>
   <button className=" px-3 h-[40px] border-[1px] border-gray-300   "> <Link rel="stylesheet" href="#" >Pizza</Link></button>
   <button className=" px-3 h-[40px] border-[1px] border-gray-300   "> <Link rel="stylesheet" href="#" >Cupcakes</Link></button>
   <button className=" px-3 h-[40px] border-[1px] border-gray-300   "> <Link rel="stylesheet" href="#" className=" " >Services</Link></button>
   <button className=" px-3 h-[40px] border-[1px] border-gray-300   "> <Link rel="stylesheet" href="#" >Cookies</Link></button> 
   <button className=" px-3 h-[40px] border-[1px] border-gray-300   "> <Link rel="stylesheet" href="#" >Our Shop</Link></button>
   <button className=" px-3 h-[40px] border-[1px] border-gray-300   "> <Link rel="stylesheet" href="#" >Tandoori Chicken</Link></button>
   <button className=" px-3 h-[40px] border-[1px] border-gray-300   "> <Link rel="stylesheet" href="#" >Cookies</Link></button> 
   <button className=" px-3 h-[40px] border-[1px] border-gray-300   "> <Link rel="stylesheet" href="#" >Our Shop</Link></button>
   <button className=" px-3 h-[40px] border-[1px] border-gray-300   "> <Link rel="stylesheet" href="#" >Tandoori Chicken</Link></button>
  </div>
</div>
<div className="flex flex-col gap-4  py-8 w-[424px]  border-[1px] border-gray-300 ">
<h5 className="h5 text-black font-bold text-center">Photo Gallery</h5>
<div className=" flex flex-wrap gap-4 justify-center ">
  <Image src={ galleryImg1 } alt=""></Image>
  <Image src={ galleryImg2 } alt=""></Image>
  <Image src={ galleryImg3 } alt=""></Image>
  <Image src={ galleryImg4 } alt=""></Image>
  <Image src={ galleryImg5 } alt=""></Image>
  <Image src={ galleryImg6 } alt=""></Image>
</div>

          </div>
          <div className="flex flex-col gap-4 items-center  py-8 w-[424px]  border-[1px] border-gray-300 ">
            <h5 className="h5 text-black font-bold text-center">Follow Us</h5>
            <Image src={footerSocial} alt=""></Image>


          </div>
        </div>
      </div>
    </div>
  );
}
