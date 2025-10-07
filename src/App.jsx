import { useState } from 'react'
import Layout from './layout/Layout'
import "../src/App.css"
import Home from './Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from '../src/module/Details.jsx';
import Sinup from './module/Sinup.jsx';
import Context from './components/Context.jsx';
import Cheakout from './module/Cheakout.jsx';
import ContextPro from './components/ContextPro.jsx';
import Contactus from './module/Contactus.jsx';
import AboutUs from './module/Aboutus.jsx';
import Login from './module/Login.jsx';

function App() {


  return (
    <>
      <BrowserRouter>
      <ContextPro> 

      <Context>

     <Layout>
      
 <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/products/:id" element={<Details />} />
  <Route path="/propage" element={<Cheakout />} />
  <Route path="/contactus" element={<Contactus />} />
   <Route path="/aboutus" element={<AboutUs />} />
    <Route path="/singup" element={<Sinup />} />
     <Route path="/login" element={<Login />} />
 </Routes>
      </Layout>
      </Context>
      
      </ContextPro>
      </BrowserRouter>

    </>
  )
}

export default App
