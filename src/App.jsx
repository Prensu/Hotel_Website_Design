import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import OurStoryPage from "./pages/ourStory";
import Room from "./pages/Room";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import SingleRoom from "./pages/SingleRoom";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-story" element={<OurStoryPage />} />
        <Route path="/rooms" element={<Room />} />
        <Route path="/rooms/:slug" element={<SingleRoom />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
