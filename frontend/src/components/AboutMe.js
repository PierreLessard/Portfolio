import React from "react";
import ButtonLinks from '../components/ButtonLinks';
import Contact from '../components/Contact';
import DownloadButton from '../components/DownloadButton';
import resume from '../PierreLessardResume.pdf'

export function AboutMe() {
    return (
        <div className='md:col-span-5 xl:col-span-4 flex justify-center md:justify-end items-start md:h-screen md:sticky top-[200px] mt-[120px] md:mt-[0px]'>
                    <div class="p-5 px-[50px] md:px-[25px] lg:px-[75px] bg-white rounded-[20px] shadow dark:bg-[#111111] dark:border-gray-700 pt-[100px]">
                        <img src='./PierreLessard.jpg' className='w-[240px] h-[240px] object-cover rounded-[20px] translate-x-[1%] absolute -mt-[258px]' alt="avatar"></img>
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
    )
}