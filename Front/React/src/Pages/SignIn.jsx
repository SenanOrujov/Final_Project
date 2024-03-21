import React from "react";
import background from "../assets/signBackground.jpg";
import { Switch, Divider } from "antd";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { validationSchema } from "../validations/accountSchema";
import { useDispatch } from "react-redux";
import { logInAction } from "../redux/slices/accountSlice";
import { signInPost } from "../services/accountService";

const SignIn = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      signInPost(values)
        .then((res) => {
          dispatch(logInAction(res.data));
        })
        .catch((e) => console.log(e));
    },
  });

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  return (
    <div className='w-full h-screen'>
      <img
        src={background}
        className='w-full h-full object-cover absolute sm:block'
        alt='#'
      />
      <div className='bg-black/40 fixed top-0 left-0 w-full h-screen'></div>
      <div className='flex flex-wrap justify-center -mx-3'>
        <div className='w-full max-w-full px-6 mx-auto shrink-0 md:flex-0 md:w-7/12 lg:w-5/12 xl:w-4/12 mt-48 lg:mt-20 md:mt-40'>
          <div className='relative z-0 flex flex-col min-w-0 break-words bg-white/85 border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border'>
            <div className='text-center border-black/12.5 rounded-t-2xl border-b-0 border-solid p-6'>
              <h5 className='mt-2 mb-4 text-2xl font-bold'>Sign In</h5>
            </div>
            <div className='flex-auto p-12 pt-0 pb-6'>
              <form
                onSubmit={formik.handleSubmit}
                className='max-w-md mx-auto py-4'
              >
                <div className='relative z-0 w-full mb-[50px] group'>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    className='text-xl border-black block py-0.5 px-0 w-full  text-black-900 bg-transparent border-0 border-b-2 border-black-300 appearance-none dark:text-black dark:border-black-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer'
                    placeholder=' '
                    required
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label
                    htmlFor='email'
                    className='peer-focus:font-medium absolute text-xl text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                  >
                    Email Address
                  </label>
                </div>
                <div className='relative z-0 w-full mb-5 group'>
                  <input
                    type='password'
                    name='password'
                    id='password'
                    className='text-xl border-black block py-0.5 px-0 w-full text-md text-black-900 bg-transparent border-0 border-b-2 border-black-300 appearance-none dark:text-black dark:border-black-600 dark:focus:border-red-500 focus:outline-none focus:ring-0 focus:border-red-600 peer'
                    placeholder=' '
                    required
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label
                    htmlFor='password'
                    className='peer-focus:font-medium absolute text-xl text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-600 peer-focus:dark:text-red-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
                  >
                    Password
                  </label>
                </div>
                <div className='min-h-6 my-1 flex items-center '>
                  <Switch onChange={onChange} className='mr-7 bg-gray-500' />
                  <p className='font-medium'>Remember me</p>
                </div>
                <div className='text-center'>
                  <button
                    type='submit'
                    className='inline-block w-full px-5 py-2.5 mt-10 mb-2 text-base font-bold text-center text-black align-middle  border-0 rounded-lg shadow-md cursor-pointer  active:hover:text-white active:text-black hover:shadow-xs leading-normal tracking-tight-rem bg-150 bg-x-25 bg-red-600 hover:border-red-700 hover:bg-red-700'
                  >
                    Sign In
                  </button>
                  <Divider>
                    <p className='text-gray-700'>or</p>
                  </Divider>
                  <Link to='/signup'>
                    <button className='inline-block w-full px-5 py-2.5 mt-2 mb-2 text-base font-bold text-center text-white align-middle border-0 rounded-lg shadow-md cursor-pointer active:hover:text-white active:text-white hover:shadow-xs leading-normal tracking-tight-rem bg-black hover:bg-black'>
                      Sign up
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
