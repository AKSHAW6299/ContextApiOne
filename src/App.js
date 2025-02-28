import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DummyOne from './views/DummyOne';
import Parent from './views/Parent';
import { BioProvider } from './ContextApi/Index';


function App() {

  return (
    <BioProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Parent />} />
          <Route path="/dummyOne" element={<DummyOne />} />
        </Routes>
      </Router>
    </BioProvider>
  )
}

export default App