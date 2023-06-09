import React from 'react';

const NavButton = ({ iconClasses, bText, isSelected }) => {



  return (
    <button class={"w-[80px] h-[80px] relative items-center justify-center p-1.5 mb-2 overflow-hidden text-sm  rounded-xl group font-semibold focus:outline-none focus:ring-lime-800 pt-[10px]  transition-all ease-in duration-75 " + (isSelected ? "text-white bg-gradient-to-br from-[#382036] to-[#72384d] font-normal" : "text-[#a6a6a6] bg-[#222425] hover:font-normal hover:text-white hover:bg-gradient-to-br hover:from-[#382036] hover:to-[#72384d]")}
     >
        <div className='text-3xl pb-[4px]'>
            <i class={iconClasses}></i>
        </div>
        <h2>{bText}</h2>
    </button>
  );
};

export default NavButton;