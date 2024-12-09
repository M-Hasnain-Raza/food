import HeroSection from "./components/heroSection";
import AboutUs from "./components/aboutUs";
import FoodCategory from "./components/foodCategory";
import Clients from "./components/clients";
import ChoosePickMenu from "./components/choosePickMenu";
import OurChefs from "./components/ourChefs";
import Testimonals from "./components/testimonals";

export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <AboutUs></AboutUs>
      <FoodCategory></FoodCategory>
      <Clients></Clients>
      <ChoosePickMenu></ChoosePickMenu>
      <OurChefs></OurChefs>
      <Testimonals></Testimonals>
    </div>
  );
}
