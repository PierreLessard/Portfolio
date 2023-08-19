import React from "react";
import { StandardPage } from "../components/StandardPage";

export function Home() {
    
    return(
        <>
        <StandardPage 
        content={
        <div>
            <h4 className='text-4xl'>Hello!</h4>
            <p className='p-4 font-sans text-[#9aa19e]'>
                Third year university student pursuing a Specialist Degree in Computer Science (BS) at the University of Toronto. Aiming to apply knowledge of Computer Science to further my experience and understanding of the field of computer programming.
            </p>
        </div>
        
        }
        selected="home"
        />
        </>
    );
};