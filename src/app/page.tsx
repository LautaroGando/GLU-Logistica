import AboutUs from "@/components/HomeComponents/AboutUs/AboutUs";
import Budgest from "@/components/HomeComponents/Budgets/Budgets";
import CoverageAreas from "@/components/HomeComponents/CoverageAreas/CoverageAreas";
import Sections from "@/components/HomeComponents/Sections/Sections";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Sections />
      <AboutUs />
      <Budgest />
      <CoverageAreas />
    </div>
  );
}
