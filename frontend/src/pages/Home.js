import React from "react";
import { StandardPage } from "../components/StandardPage";
import welcomeText from "../data/welcomeText.json"

export function Home() {
    
    return(
        <>
        <StandardPage 
        content={
            <div>
                <div className="flex items-center">
                    <h4 className='text-4xl'>Welcome!</h4> 
                    <div className="ml-10 rounded-[20px] h-[4px] grow bg-gradient-to-r from-[#c65364] to-[#46233b]"></div>
                </div>
                {welcomeText.map((item) => (
                    <p className='p-4 font-sans text-[#9aa19e]'> {item.description} </p>
                ))}
            </div>
        }
        selected="home"
        />
        </>
    );
};