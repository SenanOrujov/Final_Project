import React, { useState } from "react";
import { CloseOutlined, UserOutlined } from "@ant-design/icons";
import Actorsvg from "../../assets/svg/actor.svg";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState("translate-x-0");

  const onClose = () => {
    setShowSidebar("-translate-x-80");
  };

  return (
    <>
      <div
        className={`bg-white shadow-sm ${showSidebar} fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0 border`}
      >
        <div className='relative'>
          <div className='py-6 px-8 text-center cursor-pointer'>
            <h6 className='block  tracking-normal  text-base font-semibold leading-relaxed'>
              Control Panel
            </h6>
            <CloseOutlined
              className='top-2 right-4 absolute cursor-pointer text-xl hover:rotate-180 transition-all duration-700 hover:text-red-500'
              onClick={onClose}
            />
          </div>
        </div>
        <div className='m-4'>
          <ul className='mb-4 flex flex-col gap-1'>
            <li>
              <div>
                <button className=' align-middle select-none font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-gray-500 hover:bg-gray-500/10 active:bg-gray-500/30 w-full flex items-center gap-4 px-4 capitalize'>
                  <img src={Actorsvg} className='w-8 h-7' />
                  <p className='block font-sans text-lg font-bold leading-relaxed capitalize '>
                    Actors
                  </p>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
