import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Appointment from "./pages/Appointment";
import PetsBuy from "./pages/PetsBuy";
import { Route, Routes } from "react-router-dom";
import Services from "./pages/Services";
import Careers from "./pages/Careers";
import { useState } from "react";

function App() {
    const [isLogin, setIsLogin] = useState(false)


    return (
        <div>
            <Header  isLogin={isLogin} />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/appointment" element={<Appointment />} />

                <Route path="/vaccination" element={<Services details = "vaccination" isLogin={isLogin}/>} />
                <Route path="/wellness" element={<Services details = "wellness" isLogin={isLogin} />} />
                <Route path="/dental" element={<Services details = "dental" isLogin={isLogin} />} />
                
                <Route path="/petsbuy" element={<PetsBuy />} />
                <Route path="/careers" element={<Careers />} />
                <Route path= "/appointments" element={<Appointment/>} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
