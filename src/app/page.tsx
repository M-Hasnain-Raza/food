import HeroSection from "./components/heroSection";
import AboutUs from "./components/aboutUs";
import FoodCategory from "./components/foodCategory";
import Clients from "./components/clients";
import ChoosePickMenu from "./components/choosePickMenu";
import OurChefs from "./components/ourChefs";
import Testimonals from "./components/testimonals";
import RestaurantProcess from "./components/restaurantProcess";
import BlogPost from "./components/blogPost";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className=" max-w-[1920px] mx-auto px-[0.5px] ">
      <HeroSection></HeroSection>
      <AboutUs></AboutUs>
      <FoodCategory></FoodCategory>
      <Clients></Clients>
      <ChoosePickMenu></ChoosePickMenu>
      <OurChefs></OurChefs>
      <Testimonals></Testimonals>
      <RestaurantProcess></RestaurantProcess>
      <BlogPost></BlogPost>
      <Footer></Footer>
    </div>
  );
}
