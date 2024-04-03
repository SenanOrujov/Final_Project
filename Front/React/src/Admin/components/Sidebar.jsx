import React, { useState } from "react";
import { CloseOutlined, UserOutlined } from "@ant-design/icons";
import Actorsvg from "../../assets/svg/actor.svg";
import { useNavigate } from "react-router-dom";
import Genresvg from "../../assets/svg/genre.svg";
import Languagesvg from "../../assets/svg/language.svg";
import Directorsvg from "../../assets/svg/director.svg";
import HallTypesvg from "../../assets/svg/halltype.svg";
import MovieSvg from "../../assets/svg/hall.svg";
import Cinemasvg from "../../assets/svg/cinema.svg";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState("translate-x-0");

  const onClose = () => {
    setShowSidebar("-translate-x-full");
  };

  const navigate = useNavigate();

  return (
    <>
      <div
        className={`bg-white shadow-sm ${showSidebar} fixed inset-0 z-50 my-4 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0 border`}
      >
        <div className='relative'>
          <div className='py-6 px-8 text-center cursor-pointer'>
            <h6
              onClick={() => navigate("/admin")}
              className='block  tracking-normal  text-base font-semibold leading-relaxed'
            >
              Control Panel
            </h6>
            <CloseOutlined
              className='xl:hidden top-2 right-4 absolute cursor-pointer text-xl hover:rotate-180 transition-all duration-700 hover:text-red-500'
              onClick={onClose}
            />
          </div>
        </div>
        <div className='m-4'>
          <ul className='mb-4 flex flex-col gap-1'>
            <li>
              <div>
                <button
                  onClick={() => navigate("/admin/actors")}
                  className=' align-middle select-none font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-gray-500 hover:bg-gray-500/10 active:bg-gray-500/30 w-full flex items-center gap-4 px-4 capitalize'
                >
                  <img src={Actorsvg} className='w-8 h-7' />
                  <p className='block font-sans text-lg font-bold leading-relaxed capitalize '>
                    Actors
                  </p>
                </button>
              </div>
            </li>
            <li>
              <div>
                <button
                  onClick={() => navigate("/admin/genre")}
                  className=' align-middle select-none font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-gray-500 hover:bg-gray-500/10 active:bg-gray-500/30 w-full flex items-center gap-4 px-4 capitalize'
                >
                  <img src={Genresvg} className='w-8 h-7' />
                  <p className='block font-sans text-lg font-bold leading-relaxed capitalize '>
                    Genres
                  </p>
                </button>
              </div>
            </li>
            <li>
              <div>
                <button
                  onClick={() => navigate("/admin/language")}
                  className=' align-middle select-none font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-gray-500 hover:bg-gray-500/10 active:bg-gray-500/30 w-full flex items-center gap-4 px-4 capitalize'
                >
                  <img src={Languagesvg} className='w-8 h-7' />
                  <p className='block font-sans text-lg font-bold leading-relaxed capitalize '>
                    Languages
                  </p>
                </button>
              </div>
            </li>
            <li>
              <div>
                <button
                  onClick={() => navigate("/admin/director")}
                  className=' align-middle select-none font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-gray-500 hover:bg-gray-500/10 active:bg-gray-500/30 w-full flex items-center gap-4 px-4 capitalize'
                >
                  <img src={Directorsvg} className='w-8 h-7' />
                  <p className='block font-sans text-lg font-bold leading-relaxed capitalize '>
                    Directors
                  </p>
                </button>
              </div>
            </li>
            <li>
              <div>
                <button
                  onClick={() => navigate("/admin/halltype")}
                  className=' align-middle select-none font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-gray-500 hover:bg-gray-500/10 active:bg-gray-500/30 w-full flex items-center gap-4 px-4 capitalize'
                >
                  <img src={HallTypesvg} className='w-8 h-7' />
                  <p className='block font-sans text-lg font-bold leading-relaxed capitalize '>
                    Hall types
                  </p>
                </button>
              </div>
            </li>
            <li>
              <div>
                <button
                  onClick={() => navigate("/admin/cinema")}
                  className=' align-middle select-none font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-gray-500 hover:bg-gray-500/10 active:bg-gray-500/30 w-full flex items-center gap-4 px-4 capitalize'
                >
                  <img src={Cinemasvg} className='w-8 h-7' />
                  <p className='block font-sans text-lg font-bold leading-relaxed capitalize '>
                    Cinemas
                  </p>
                </button>
              </div>
            </li>
            <li>
              <div>
                <button
                  onClick={() => navigate("/admin/movies")}
                  className=' align-middle select-none font-bold text-center transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 rounded-lg text-gray-500 hover:bg-gray-500/10 active:bg-gray-500/30 w-full flex items-center gap-4 px-4 capitalize'
                >
                  <img src={MovieSvg} className='w-8 h-7' />
                  <p className='block font-sans text-lg font-bold leading-relaxed capitalize '>
                    Movies
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
