import './App.css';
// import { useRef, useEffect, useState } from 'react'
import Nav from './components/Nav'
import ButtonLinks from './components/ButtonLinks';
import Contact from './components/Contact';
import DownloadButton from './components/DownloadButton';
import resume from './PierreLessardResume.pdf'

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

        <div class="bg-[url('../public/bg1.jpg')] bg-cover">
            <div class="grid grid-cols-12 gap-[40px] bg-scroll pt-[200px] w-full">
                <div className='col-span-4 flex justify-end items-start h-screen sticky top-[200px]'>
                    <div class="p-5 px-[75px] bg-white rounded-[20px] shadow dark:bg-[#111111] dark:border-gray-700 pt-[100px]">
                        <img src='./pierre_lessard.png' className='w-[240px] h-[240px] rounded-[20px] translate-x-[1%] absolute transform -mt-[258px]' alt="avatar"></img>
                        <div className='max-w-[250px] pt-2 flex flex-col justify-center items-center m-auto'>
                            <h2 class="mb-1 text-white text-[20px] text-center font-semibold">Pierre-William Lessard</h2>
                            <h3 class="mb-4 text-[#7B7B7B] inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg dark:text-[#A6A6A6]"> Software Developer </h3>
                            <ButtonLinks/>
                            <Contact/>
                            <div class='mt-6'>
                                <DownloadButton filePath={resume} fileName="PierreLessardResume.pdf" buttonText="Download Resume"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="justify right col-span-8 text-white pr-[10%] pl-[5%]">
                    <Nav/>
                    <div className='justify-center'>
                        <div className='lg:rounded-2xl bg-white dark:bg-[#111111] p-10 font-serif'>
                            <h4 className='text-4xl'>Hello!</h4>
                            <p className='p-4 font-sans text-[#9aa19e]'>
                            Third year university student pursuing a Specialist Degree in Computer Science (BS) at the University of Toronto. Aiming to apply knowledge of Computer Science to further my experience and understanding of the field of computer programming.
                            </p>
                            <h1>text</h1><h1>text</h1><h1>text</h1><h1>text</h1><h1>text</h1><h1>text</h1><h1>text</h1><h1>text</h1><h1>text</h1><h1>text</h1><h1>text</h1><h1>text</h1><h1>text</h1><h1>text</h1><h1>text</h1><h1>text</h1><h1>text</h1><h1>text</h1><h1>text</h1><h1>text</h1><h1>text</h1><h1>text</h1><h1>text</h1><h1>text</h1><h1>text</h1><h1>text</h1><h1>text</h1><h1>text</h1><h1>text</h1><h1>text</h1>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    </>
  );
}

export default App;
