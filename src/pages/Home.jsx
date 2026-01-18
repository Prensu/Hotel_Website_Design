import Hero from "../components/Hero";
import OurStory from "../components/OurStory";
import Rooms from "../components/roomSection";
import Dining from "../components/Dining";
import SpaWellness from "../components/SpaWellness";
import ExclusiveAmenities from "../components/ExclusiveAmenities";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <OurStory />
      <Rooms />
      <Dining />
      <SpaWellness />
      <ExclusiveAmenities />
      <Testimonials />
    </>
  );
}
