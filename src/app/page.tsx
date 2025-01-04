import AboutUs from "@/components/HomeComponents/AboutUs/AboutUs";
import Budgest from "@/components/HomeComponents/Budgets/Budgets";
import Contact from "@/components/HomeComponents/Contact/Contact";
import CoverageAreas from "@/components/HomeComponents/CoverageAreas/CoverageAreas";
import Sections from "@/components/HomeComponents/Sections/Sections";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 mb-[100px]">
      <Sections />
      <div id="about-us" className="w-full h-10 md:h-20"></div>
      <AboutUs />
      <div id="budgets" className="md:h-10"></div>
      <Budgest />
      <div id="coverage-areas"></div>
      <CoverageAreas />
      <Contact />
    </div>
  );
}
