import AboutUs from "@/components/HomeComponents/AboutUs/AboutUs";
import Budgest from "@/components/HomeComponents/Budgets/Budgets";
import Companies from "@/components/HomeComponents/Companies/Companies";
import Contact from "@/components/HomeComponents/Contact/Contact";
import CoverageAreas from "@/components/HomeComponents/CoverageAreas/CoverageAreas";
import Sections from "@/components/HomeComponents/Sections/Sections";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 mb-[100px] root-main my-10 ">
      <Sections />
      <div id="about-us" className="w-full h-20"></div>
      <AboutUs />
      <div id="budgets" className="h-10"></div>
      <Budgest />
      <div id="coverage-areas" className="h-10"></div>
      <CoverageAreas />
      <div id="contact" className="h-10"></div>
      <Contact />
      <Companies />
    </div>
  );
}
