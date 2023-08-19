import React from "react";
import Nav from '../components/Nav'
import { AboutMe } from "../components/AboutMe";

export function StandardPage({ content, selected }) {
    return(
        <div class="bg-[#181a26] bg-[url('../public/bg1.jpg')] bg-no-repeat bg-top bg-[length:100%_]">
            <div class="grid md:grid-cols-12 gap-[40px] bg-scroll pt-[20px] md:pt-[200px] w-full">
                <div className="md:hidden">
                    <Nav selected={selected}/>
                </div>
                <AboutMe/>
                <div class="justify right md:col-span-7 xl:col-span-8 text-white pr-[5%] lg:pr-[10%] pl-[5%] pb-[100px]">
                    <div className="hidden md:block"><Nav selected={selected}/></div>
                    <div className='justify-center'>
                        <div className='rounded-2xl bg-white dark:bg-[#111111] p-10 font-serif'>
                            { content }
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    )
}