import './App.css';
import HomePage from './Components/HomePage/HomePage';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import BookingPageWallpaper from './Components/BookingPage/BookingPageWallpaper/BookingPageWallpaper';
import BookingSummary from './Components/BookingSummary/BookingSummary';
import PaymentSuccess from './Components/PaymentSuccess/PaymentSuccess';
import 'typeface-open-sans';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
        <Routes>
          <Route path='/'element={<HomePage/>}/>
          <Route path='/bookRooms' element={<BookingPageWallpaper/>}/>
          <Route path='/payment' element={<BookingSummary/>}/>
          <Route path='/payment-success' element={<PaymentSuccess/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
    
    </>
  );
}

export default App;
