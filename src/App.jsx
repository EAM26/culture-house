import './App.css'
import Homepage from "./pages/Homepage.jsx";
import Footer from "./components/Footer.jsx";
import NavBar from "./components/NavBar.jsx";
import {Route, Routes} from "react-router";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Location from "./pages/Location.jsx";
import PodcastStudio from "./pages/PodcastStudio.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Services from "./pages/Services.jsx";
import Studio from "./pages/Studio.jsx";

function App() {

    return (
        <>
                <NavBar/>
            <main>
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/location" element={<Location/>}/>
                    <Route path="/podcast-studio" element={<PodcastStudio/>}/>
                    <Route path="/portfolio" element={<Portfolio/>}/>
                    <Route path="/services" element={<Services/>}/>
                    <Route path="/studio" element={<Studio/>}/>
                </Routes>
            </main>
                <Footer/>
        </>
    )
}

export default App
