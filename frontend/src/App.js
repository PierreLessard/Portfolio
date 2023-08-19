import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects"
import { Courses } from "./pages/Courses"
import { NotFound } from "./pages/NotFound";
// import { useRef, useEffect, useState } from 'react'


function App() {

    return (
    <>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/projects" element={<Projects/>} />
                <Route path="/courses" element={<Courses/>} />
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </Router>
        
    </>
  );
}

export default App;
