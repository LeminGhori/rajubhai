import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/home/Home.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
