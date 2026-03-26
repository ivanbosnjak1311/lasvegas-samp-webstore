import { BrowserRouter, Routes, Route } from "react-router-dom";

import TopBar from "./components/TopBar";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Disclaimer from "./components/Disclaimer";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Login from "./pages/Login";
import AccountBooster from "./pages/AccountBooster";
import BoostPackage from "./pages/BoostPackage";
import Vip from "./pages/Vip";
import Property from "./pages/Property";
import Houses from "./pages/Houses";
import Apartments from "./pages/Apartments";
import Cottages from "./pages/Cottages";
import Business from "./pages/Business";
import Jobs from "./pages/Jobs";
import Gunshop from "./pages/Gunshop";

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={
            <>
              <Hero title="Welcome" />
              <Home />
            </>
          }
        />
        <Route path="/login" element={
            <>
              <Hero title="Enter username" />
              <Login />
            </>
          }
        />
        <Route
          path="/account-booster"
          element={
            <>
              <Hero title="Account Booster" />
              <AccountBooster />
            </>
          }
        />
        <Route
          path="/vip"
          element={
            <>
              <Hero title="VIP" />
              <Vip />
            </>
          }
        />
        <Route
          path="/boost-paketi"
          element={
            <>
              <Hero title="Boost Paketi" />
              <BoostPackage />
            </>
          }
        />
        <Route
          path="/category/imovina"
          element={
            <>
              <Hero title="Imovina" />
              <Property />
            </>
          }
        />
        <Route
          path="/category/kuce"
          element={
            <>
              <Hero title="Kuce" />
              <Houses />
            </>
          }
        />
        <Route
          path="/category/stanovi"
          element={
            <>
              <Hero title="Stanovi" />
              <Apartments />
            </>
          }
        />
        <Route
          path="/category/vikendice"
          element={
            <>
              <Hero title="Vikendice" />
              <Cottages />
            </>
          }
        />
        <Route
          path="/category/firma"
          element={
            <>
              <Hero title="Firma" />
              <Business />
            </>
          }
        />
        <Route
          path="/category/poslovi"
          element={
            <>
              <Hero title="Poslovi" />
              <Jobs />
            </>
          }
        />
        <Route
          path="/category/gun-shop"
          element={
            <>
              <Hero title="Gun Shop" />
              <Gunshop />
            </>
          }
        />
      </Routes>
  
      <Disclaimer />
      <Footer />
    </BrowserRouter>
  );
}

export default App;