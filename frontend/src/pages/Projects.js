import React from 'react';
import { StandardPage } from '../components/StandardPage';
import projectsText from '../data/projectsText.json'

export function Projects() {
    return ( 
    <>
    <StandardPage content={
        <div>
            <div className="flex items-center">
                <h4 className='text-4xl'>Introduction</h4> 
                <div className="ml-10 rounded-[20px] h-[4px] grow bg-gradient-to-r from-[#c65364] to-[#46233b]"></div>
            </div>
            <p className='p-4 font-sans text-[#9aa19e]'> {projectsText.introduction} </p>
        </div>
    } selected="projects"/>
    </> 
    );
}