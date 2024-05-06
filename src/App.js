
import './App.css';
import React from 'react';
import {
  BrowserRouter ,
  Routes,
  Route,
} from "react-router-dom";

import HomePage from './pages/HomePage';
import BrowseHotel from './pages/BrowseHotels.jsx';
import Booking from './pages/Booking.jsx';
import FinalPage from './pages/FinalPage.jsx';



function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/Browse' element={<BrowseHotel/>} />
        <Route path='/Book' element={<Booking/>} />
        <Route path='/Final' element={<FinalPage/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
