import { useState } from 'react'
import Layout from './layout/Layout'
import "../src/App.css"
import Home from './Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Details from '../src/module/Details.jsx';

import Context from './components/Context.jsx';

function App() {


  return (
    <>
      <BrowserRouter>
      <Context>

     <Layout>
      
 <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/products/:id" element={<Details />} />
 </Routes>
      </Layout>
      </Context>
      
      </BrowserRouter>

    </>
  )
}

export default App
