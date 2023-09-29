import { Route, Routes} from "react-router-dom";
import './App.css';
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects"
import { Courses } from "./pages/Courses"
import { NotFound } from "./pages/NotFound";
// import { useRef, useEffect, useState } from 'react'


function App() {

    return (
    <>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>
            <link href="https://fonts.googleapis.com/css?family=Roboto+Slab&display=swap" rel="stylesheet"></link>
        </head>
        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/home" element={<Home/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/courses" element={<Courses/>} />
            <Route path="*" element={<NotFound/>}/>
        </Routes>
        <body>
            <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
        </body>
    </>
  );
}

export default App;
