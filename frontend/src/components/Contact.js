import React from "react";

const Contact = () => {
    const handleClick = async (text) => {
        try {
          await navigator.clipboard.writeText(text);
          console.log('Text copied to clipboard');
        } catch (err) {
          console.error('Failed to copy text: ', err);
        }
    };

    return (
        <>
        <script src="https://kit.fontawesome.com/653fee62bb.js" crossorigin="anonymous"></script>
        <div className='mt-5 inline-block dark:bg-[#1D1D1D] px-5 py-3 rounded-lg w-[250px] md:w-[250px] lg:w-[350px]'>
            <h1 class='pb-2 pr-8 text-white text-center border-b border-[#3D3D3D]'>Click to Copy:</h1>

            <div className="flex py-2.5 border-b border-[#3D3D3D] cursor-pointer" onClick={() => handleClick('978-987-8812')}> 
                <button className=" bg-black hover:bg-[#24292F]/90  rounded-lg">
                    <i class="fa fa-phone text-[#e16668] p-3"></i>
                </button>
                <div className="ml-2 justify-left">
                    <p class="text-xs text-[#7B7B7B]">Phone</p>
                    <h2 className="text-white">978-987-8812</h2>
                </div>
            </div>  
            <div className="flex py-2.5 border-b border-[#3D3D3D] cursor-pointer" onClick={() => handleClick('lessardpw@gmail.com')}> 
                <button className=" bg-black hover:bg-[#24292F]/90 rounded-lg">
                    <i class="fa fa-envelope text-[#e16668] px-[10.75px]"></i>
                </button>
                <div className="ml-2 justify-left">
                    <p class="text-xs text-[#7B7B7B]">Email</p>
                    <h2 className="text-white">Lessardpw@gmail.com</h2>
                </div>
            </div>
            <div className="flex py-2.5 border-b border-[#3D3D3D] cursor-pointer" onClick={() => handleClick('Toronto, ON & Tyngsboro, MA')}> 
                    <button className=" bg-black hover:bg-[#24292F]/90 rounded-lg py-2">
                    <i class="fa fa-map-marker text-[#e16668] px-[14.5px]"></i>
                    </button>
                <div className="ml-2 justify-left">
                    <p class="text-xs text-[#7B7B7B]">Location</p>
                    <h2 className="text-white">Toronto, ON & Tyngsboro, MA</h2>
                </div>
            </div>
            <div className="flex py-2.5  cursor-pointer" onClick={() => handleClick('04/03/2003')}> 
                <button className=" bg-black hover:bg-[#24292F]/90 rounded-lg">
                    <i class="fa fa-birthday-cake text-[#e16668] px-[10.75px]"></i>
                </button>
                <div className="ml-2 justify-left">
                    <p class="text-xs text-[#7B7B7B]">Birthday</p>
                    <h2 className="text-white">April 3rd, 2003</h2>
                </div>
            </div>       
        </div>
        </>
    );
  };
  
  export default Contact;
  
