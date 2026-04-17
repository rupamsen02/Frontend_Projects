import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Gallery from "./components/gallery/Gallery";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Program from "./components/program/Program";
import Testimonial from "./components/testimonial/Testimonial";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <div className="container ">
        <Program />
        <About />
        <Gallery />
        <Testimonial />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
