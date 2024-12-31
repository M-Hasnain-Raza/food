"use client";
import Image from "next/image";

import HeroSection2 from "../components/heroSection2";
import BlogContainer from "../components/blogContainer";
import Footer from "../components/footer";

export default function BlogPage() {
  return (
    <div>
      <HeroSection2/>
      <BlogContainer/>
      <Footer/>
    </div>
  );
}