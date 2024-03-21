import React from "react";
import background from "../assets/signBackground.jpg";

const SignUp = () => {
  return (
    <div className='w-full h-screen'>
      <img
        src={background}
        className='w-full h-full object-cover absolute sm:block'
        alt='#'
      />
      <div className='bg-black/40 fixed top-0 left-0 w-full h-screen'></div>
      <div className='fixed w-full py-24 z-50'>
        <div className='max-w-[500px] h-[550px] mx-auto bg-white/65 text-balck rounded-3xl'>
          <div className='max-w-[490px] mx-auto py-4  xl:py-16 md:py-12'>
            <h1 className='text-4xl py-3 font-bold flex justify-center items-center'>
              Sign Up
            </h1>
            <form class='max-w-md mx-auto py-4 md:py-12 xl:py-16'>
              <div class='grid md:grid-cols-2 md:gap-6'>
                <div class='relative z-0 w-full mb-5 group'>
                  <input
                    type='text'
                    name='first-name'
                    id='first-name'
                    class='block py-2.5 px-0 w-full text-xl text-black-900 bg-transparent border-0 border-b-2 border-black-300 appearance-none dark:text-black dark:border-black-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer border-black'
                    placeholder=' '
                    required
                  />
                  <label
                    htmlFor='first-name'
                    class=' peer-focus:font-medium absolute text-xl text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                  >
                    First Name
                  </label>
                </div>
                <div class='relative z-0 w-full mb-5 group'>
                  <input
                    type='text'
                    name='last-name'
                    id='last-name'
                    class=' border-black block py-2.5 px-0 w-full text-xl text-black-900 bg-transparent border-0 border-b-2 border-black-300 appearance-none dark:text-black dark:border-black-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer'
                    placeholder=' '
                    required
                  />
                  <label class='peer-focus:font-medium absolute text-xl text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>
                    Last Name
                  </label>
                </div>
              </div>
              <div class='relative z-0 w-full mb-5 group'>
                <input
                  type='email'
                  name='email'
                  id='email'
                  class='text-xl border-black block py-2.5 px-0 w-full  text-black-900 bg-transparent border-0 border-b-2 border-black-300 appearance-none dark:text-black dark:border-black-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer'
                  placeholder=' '
                  required
                />
                <label
                  htmlFor='email'
                  class='peer-focus:font-medium absolute text-xl text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                >
                  Email Address
                </label>
              </div>
              <div class='relative z-0 w-full mb-5 group'>
                <input
                  type='password'
                  name='password'
                  id='password'
                  class='text-xl border-black block py-2.5 px-0 w-full text-md text-black-900 bg-transparent border-0 border-b-2 border-black-300 appearance-none dark:text-black dark:border-black-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer'
                  placeholder=' '
                  required
                />
                <label
                  htmlFor='password'
                  class='peer-focus:font-medium absolute text-xl text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                >
                  Password
                </label>
              </div>
              <button
                type='submit'
                class='text-black bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xl w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800'
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
