import './App.css'
import Homepage from "./pages/Homepage.jsx";
import Footer from "./components/Footer.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {

    return (
        <>
            <div>
                <NavBar/>
            </div>
            <div>
                <Homepage/>
            </div>
            <div>
                <Footer/>
            </div>

        </>
    )
}

export default App
