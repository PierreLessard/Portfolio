import React from 'react';
import NavButton from './NavButton';
import resume from '../PierreLessardResume.pdf';

const Nav = ({ selected }) => {
  return (
    <>
    <div 
        className='w-[380px] lg:w-[450px] h-[100px] lg:h-[144px] p-[15px] lg:p-[30px] mx-auto md:mx-0 md:ml-auto mb-5 lg:mb-10 rounded-[16px] bg-white dark:bg-[#111111]'
    >
        <div className='flex justify-center'>
            <a href='/home'>
                <NavButton class='pl-10' iconClasses="fa fa-home" bText="Home" isSelected={selected === "home"}/>
            </a>
            <a href={resume} download='PierreLessardResume.pdf'>
            <div className='pl-[20px]'>
                <NavButton class='' iconClasses="fa fa-file-text" bText="Resume" isSelected={false}/>
            </div>
            </a>
            <div className='pl-[20px]'>
                <a href='/projects'>
                <NavButton class='' iconClasses="fa fa-anchor" bText="Projects" isSelected={selected === "projects"}/>
                </a>
            </div>
            <div className='pl-[20px]'>
                <a href='/courses'>
                <NavButton class='' iconClasses="fa fa-book" bText="Courses" isSelected={selected === "courses"}/>
                </a>
            </div>
        </div>
    </div>

    </>
  );
}

export default Nav;
