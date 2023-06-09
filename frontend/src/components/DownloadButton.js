import React from 'react';

const DownloadButton = ({ filePath, fileName, buttonText }) => {

  return (
    <a href={filePath} download={fileName}>
    <button class="
      relative inline-flex items-center justify-center p-1.5 px-2 mb-2 mr-2 overflow-hidden 
      text-sm  hover:text-[#dcdcdc] font-normal hover:font-normal rounded-2xl group 
      bg-gradient-to-br from-[#382036] to-[#72384d] group-hover:from-[#382036] group-hover:to-[#72384d]
     text-white focus:ring-4 focus:outline-none focus:ring-[#72384d] ">
      <span class='relative py-2.5 transition-all ease-in duration-75 bg-[#222425] rounded-md  bg-opacity-0 group-hover:bg-opacity-100'>
        <dev class='flex text-lg'>
          <i class='fa fa-download translate-y-[4px] px-3 text-base'></i>
          <h2 class='text-base pr-2'>{buttonText}</h2>
        </dev>
      </span>
    </button>
    </a>
  );
};

export default DownloadButton;
