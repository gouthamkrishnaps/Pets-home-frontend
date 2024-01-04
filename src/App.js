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
import Auth from "./components/Auth";
import About from "./pages/About";

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
                <Route path="/register" element={<Auth register/>} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/petsbuy" element={<PetsBuy />} />
                <Route path="/careers" element={<Careers />} />
<<<<<<< HEAD
                <Route path= "/Appointment" element={<Appointment/>} />
                <Route path= "/About" element={<About/>} />

=======
                <Route path= "/appointments" element={<Appointment/>} />
>>>>>>> 88e57251c651fd16b56297f87677329f2a84a470
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
