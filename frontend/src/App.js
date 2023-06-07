import './App.css';
// import { useRef, useEffect, useState } from 'react'
// import Nav from './components/Nav'
import ButtonLinks from './components/ButtonLinks';

function App() {
    // const [education, setEducation] = useState([])
    // const [work, setWork] = useState([])
    // const [portfolio, setPortfolio] = useState([])

    // useEffect(() => {
    //     // getData()
    // }, [])

    // const homeRef = useRef(null)
    // const educationRef = useRef(null)
    // const workRef = useRef(null)
    // const projectRef = useRef(null)

    // const getData = async () => {
    //     const educationResponse = await fetch('/education')
    //     const educationData = await educationResponse.json()
    //     setEducation(educationData)
    
    //     const workResponse = await fetch('/work')
    //     const workData = await workResponse.json()
    //     setWork(workData)
    
    //     const portfolioResponse = await fetch('/portfolio')
    //     const portfolioData = await portfolioResponse.json()
    //     setPortfolio(portfolioData)

    //     console.log(educationData)
    //     console.log(workData)
    //     console.log(portfolioData)
    // }

    return (
    <>
        {/* <Nav homeRef={homeRef} educationRef={educationRef} workRef={workRef} projectRef={projectRef}/> */}

        <div class="full-page-bg">
            <div class="grid grid-cols-12 gap-3 bg-scroll">
                <div className='col-span-5 flex justify-center items-center mt-[340px]'>
                    <div class="p-10 px-[45px] bg-white rounded-[20px] shadow dark:bg-[#111111] dark:border-gray-700 pt-[100px]">
                        <img src='./pierre_lessard.png' className='w-[240px] h-[240px] rounded-[20px] translate-x-[-8%] absolute transform -mt-[250px]' alt="avatar"></img>
                        <div className='max-w-[250px] pb-4 pt-2 flex flex-col justify-center items-center m-auto'>
                            <h2 class="mb-1 text-white text-[20px] text-center font-semibold">Pierre-William Lessard</h2>
                            <h3 class="mb-4 text-[#7B7B7B] inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg dark:text-[#A6A6A6]"> Software Developer </h3>
                            <ButtonLinks/>
                        </div>
                    </div>
                </div>
                <div class="col-span-7 text-white">2nd col</div>
            </div>
        </div>
    </>
  );
}

export default App;
