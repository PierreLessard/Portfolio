import './App.css';
import { useRef, useEffect, useState } from 'react'
import Nav from './components/Nav'


function App() {
    const [education, setEducation] = useState([])
    const [work, setWork] = useState([])
    const [portfolio, setPortfolio] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const homeRef = useRef(null)
    const educationRef = useRef(null)
    const workRef = useRef(null)
    const projectRef = useRef(null)

    const getData = async () => {
        const educationResponse = await fetch('/education')
        const educationData = await educationResponse.json()
        setEducation(educationData)
    
        const workResponse = await fetch('/work')
        const workData = await workResponse.json()
        setWork(workData)
    
        const portfolioResponse = await fetch('/portfolio')
        const portfolioData = await portfolioResponse.json()
        setPortfolio(portfolioData)

        console.log(educationData)
        console.log(workData)
        console.log(portfolioData)
    }

    return (
    <>
        <Nav homeRef={homeRef} educationRef={educationRef} workRef={workRef} projectRef={projectRef}/>

        <div className='md:h-screen pt-5' ref={homeRef}>
            <div className='md:w-2/4 w-10/12 m-auto mt-10 mb-3'>
                <h1 className='text-5xl mb-3'>Pierre-William Lessard</h1>
                <p className='text-2xl text-cyan-900 ml-2'>Software Engineer</p>
            </div>

            <div className='flex md:flex-row flex-col space-between md:w-2/4 m-auto py-5 border rounded-sm px-3 shadow'>
                <img alt='profile' className='rounded-full w-64 h-64 mx-8' src='./pierre_lessard.png' />
                <div>
                    <h5 className='text-2xl text-cyan-900 border-b-2 border-slate-300 pb-2'>
                        Biography
                    </h5>
                    <p className='pt-4'>
                    I grew up near Boston in Tryngsboro, MA, and moved to Toronto for my studies. I am now a third year university student pursuing a Specialist Degree in Computer Science (BS) at the University of Toronto. I am spending my summer as an assistant researching menstrual health informatics from the perspective of ubiquotus computing. I am also currently working alongside other student developers to create a website promoting this year's orientation!
                    </p>
                </div>
            </div>
        </div>

        <div className='md:h-screen pt-16' ref={educationRef}>
            <div className='mb-5 mx-5'>
                <h1 className='text-5xl mb-3'>Education</h1>
                <p className='text-lg text-cyan-900'>Here is the information on my past high school and current university education</p>
            </div>

            <div className='grid md:grid-cols-2 sm:grid-cols-1 gap-4 mx-5'>
            {education && education.map(e => (
                <div key={e.id} className='border rounded-sm p-3 shadow'>
                <h3 className='text-lg border-b-2 border-slate-300 text-slate-800'>{e.school}, {e.degree}</h3>
                <h5 className='py-2'>{e.years}</h5>
                <p>{e.description}</p>
                </div>    
            ))}
            </div>
        </div>

        <div className='md:h-screen pt-16' ref={workRef}>
            <div className='mb-5 mx-5'>
                <h1 className='text-5xl mb-3'>Work Experience</h1>
                <p className='text-lg text-cyan-900'>Here is some of my relevant recent work experience</p>
            </div>

            <div className='grid md:grid-cols-3 grid-cols-1 gap-4 mx-5'>
            {work && work.map(w => (
                <div key={w.id} className='border rounded-sm p-3 shadow'>
                <h3 className='text-lg border-b-2 border-slate-300 text-slate-800'>{w.company}, {w.job_title}</h3>
                <h5 className='py-2'>{w.years}</h5>
                <p>{w.description}</p>
                </div>
            ))}
            </div>
        </div>

        <div className='md:h-screen pt-16' ref={projectRef}>
            <div className='mb-5 mx-5'>
                <h1 className='text-5xl mb-3'>Projects</h1>
                <p className='text-lg text-cyan-900'>Here are some of the projects I have made wiht others through experiences or on my own for fun!</p>
            </div>

            <div className='grid md:grid-cols-3 grid-cols-1 gap-4 mx-5'>
            {portfolio && portfolio.map(p => (
                <div key={p.id} className='border rounded-sm p-3 shadow'>
                <h3 className='text-lg border-b-2 border-slate-300 text-slate-800'>{p.title}</h3>
                <a className='py-2 text-blue-500 hover:text-blue-700 transition cursor-pointer' href={p.url}>View Code</a>
                <p>{p.description}</p>
                </div>
            ))}
            </div>
        </div>
    </>
  );
}

export default App;
