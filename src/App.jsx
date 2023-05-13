


import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar, Header, Rooms, Footer, Arrow } from './components';

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Arrow />
        <Routes>
          <Route path="/*" element={
            <Header />
          } />


          <Route path="/rooms" element={
            <Rooms />
          } />
        </Routes>


        <Footer />
      </BrowserRouter>
    </>
  );
}