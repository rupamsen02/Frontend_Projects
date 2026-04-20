import Navbar from "./components/Navbar"
import Home from "./components/Home"
import TrustedBy from "./components/TrustedBy"
import Services from "./components/Services"
import Our_work from "./components/Our_work"
import Teams from "./components/Teams"
import Contact from "./components/Contact"
import { Toaster } from "react-hot-toast"
import Footer from "./components/Footer"

function App() {
  
  return (
    <>
      <div className="">
        <Toaster />
        <Navbar />
        <Home />
        <TrustedBy />
        <Services />
        <Our_work />
        <Teams />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
