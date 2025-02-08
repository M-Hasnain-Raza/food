"use client"

import Image from "next/image";
import ourChefBg from "../assets/ourChefBg.png";
import { useEffect, useState } from "react";


export default function OurChefs() {
    const [chef, setChef]= useState([])
      const [isLoading , setIsLoading] = useState(true);
      const [error, setError] = useState("")
    
      async function getChef() {
        try {
          const res  = await  fetch("/api/allChefs");
          const chefData = await res.json();
          if (chefData.length){
            console.log("chefData---->", chefData);
            setChef(chefData);
            console.log("chefData---->", chefData);
          }
        } catch(err) {
          setError("error");
          console.log("Error : ", err)
        }
    }
    
      useEffect(() => {
        if (chef.length) {
          console.log(chef)
          setIsLoading(false);
          setError("");
        }
      }, [chef])
    
      useEffect(()=>{
        getChef()
      }, []);
      
    return(
        <div className=" bg-[#0D0D0D] max-w-[1920px] mx-auto h-[800px] relative ">
            <Image src={ourChefBg} alt="" className=" absolute top-60 "></Image>
            <div className=" mx-auto  max-w-[1320px] h-[657px] text-center py-20">
                <h4 className=" text-[#ff9f0d] text-[32px] leading-[40px] ">Chefs</h4>
                <h2 className=" text-[48px] leading-[56px] "><span className=" text-[#ff9f0d] " >Me</span>et Our Chef</h2>
                <div className=" w-full mx-auto flex justify-between py-14 flex-wrap ">

                    {
                      !isLoading ? chef.map((v: any, i) => (
                        
                              <div key={i} className="">
                                {" "}
                                <Image height={200} width={200} src={v["image"]} alt=""></Image>
                                <p className=" p text-[#0D0D0D] py-2 ">{v.name}</p>
                               
                    
                              </div>
                    
                      )) : <>Loading...</>
                    }
              </div>

                <button className=" border border-[#ff9f0d] w-[155px] h-[50px] rounded-full  ">See More</button>
</div>
</div>
    )
}