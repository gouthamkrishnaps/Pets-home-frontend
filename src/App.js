import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Appointment from "./pages/Appointment";
import PetsBuy from "./pages/PetsBuy";
import { Route, Routes } from "react-router-dom";
import data from "./data.json";
import Services from "./pages/Services";
import Careers from "./pages/Careers";

function App() {
    const data1 = data.vaccine;
    console.log(data1);

    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/appointment" element={<Appointment />} />

                <Route path="/vaccination" element={<Services details = "vaccination" />} />
                <Route path="/wellness" element={<Services details = "wellness" />} />
                <Route path="/dental" element={<Services details = "dental" />} />
                
                <Route path="/petsbuy" element={<PetsBuy />} />
                <Route path="/careers" element={<Careers />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
