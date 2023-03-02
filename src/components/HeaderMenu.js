import React from 'react'
import CartPage from "../pages/CartPage";
import Home from "../pages/Home";
import PostPage from "../pages/PostPage";
import DiceHome from "../components/DiceHome";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from './Footer';
import Profile from './Profile';

const HeaderMenu = () => {
  return (
    <>
    <Router>
    <NavBar />
      <Routes>
        <Route path="/" index element={<Home />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/post" element={<PostPage />}></Route>
        <Route path="/dicehome" element={<DiceHome />}></Route>
        <Route path="/header" element={<Header />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
      <Footer />
    </Router>
    </>
  )
  
}

export default HeaderMenu
