import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import Appointment from './pages/Appointment';
import PetsBuy from './pages/PetsBuy';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div >
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/appointment' element={<Appointment/>}/>
        <Route path='/petsbuy' element={<PetsBuy/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
