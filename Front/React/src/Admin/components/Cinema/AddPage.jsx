import React, { useState } from "react";

const AddPage = ({ openAddPage, setOpenAddPage }) => {
  const [cinemaData, setCinemaData] = useState({
    name: "",
    address: "",
    city: "",
    phone: "",
    description: "",
    cinemaHours: [
      { dayOfWeek: 1, isClosed: false, openingTime: null, closingTime: null },
      { dayOfWeek: 2, isClosed: false, openingTime: null, closingTime: null },
      { dayOfWeek: 3, isClosed: false, openingTime: null, closingTime: null },
      { dayOfWeek: 4, isClosed: false, openingTime: null, closingTime: null },
      { dayOfWeek: 5, isClosed: false, openingTime: null, closingTime: null },
      { dayOfWeek: 6, isClosed: false, openingTime: null, closingTime: null },
      { dayOfWeek: 7, isClosed: false, openingTime: null, closingTime: null },
    ],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCinemaData({ ...cinemaData, [name]: value });
  };

  const handleHoursChange = (index, field, value) => {
    const updatedHours = [...cinemaData.cinemaHours];
    updatedHours[index][field] = value;
    setCinemaData({ ...cinemaData, cinemaHours: updatedHours });
  };
  return (
    <form>
      <div className='md:flex mb-8'>
        <div className='md:w-1/3'>
          <legend className='uppercase tracking-wide text-sm'>Location</legend>
        </div>
        <div className='md:flex-1 mt-2 mb:mt-0 md:px-3'>
          <div className='mb-4'>
            <label className='block uppercase tracking-wide text-xs font-bold'>
              Name
            </label>
            <input
              className='w-full shadow-inner p-4 border-0'
              type='text'
              name='name'
              placeholder='Cinema Name'
            />
          </div>
          <div className='md:flex mb-4'>
            <div className='md:flex-1 md:pr-3'>
              <label className='block uppercase tracking-wide text-charcoal-darker text-xs font-bold'>
                Address
              </label>
              <input
                className='w-full shadow-inner p-4 border-0'
                type='text'
                name='address'
                placeholder='555 Roadrunner Lane'
              />
            </div>{" "}
            <div className='md:flex-1 md:pr-3'>
              <label className='block uppercase tracking-wide text-charcoal-darker text-xs font-bold'>
                City
              </label>
              <input
                className='w-full shadow-inner p-4 border-0'
                type='text'
                name='city'
                placeholder='Baku'
              />
            </div>
          </div>
          <div className='md:flex mb-4'></div>
        </div>
      </div>
      <div className='md:flex mb-8'>
        <div className='md:w-1/3'>
          <legend className='uppercase tracking-wide text-sm'>Contact</legend>
        </div>
        <div className='md:flex-1 mt-2 mb:mt-0 md:px-3'>
          <div className='mb-4'>
            <label className='block uppercase tracking-wide text-xs font-bold'>
              Phone
            </label>
            <input
              className='w-full shadow-inner p-4 border-0'
              type='tel'
              name='phone'
              placeholder='+(994)(00) 000-00-00'
            />
          </div>
        </div>
      </div>
      <div className='md:flex mb-6'>
        <div className='md:w-1/3'>
          <legend className='uppercase tracking-wide text-sm'>
            Description
          </legend>
        </div>
        <div className='md:flex-1 mt-2 mb:mt-0 md:px-3'>
          <textarea
            className='w-full shadow-inner p-4 border-0'
            placeholder='Description'
            rows='6'
          ></textarea>
        </div>
      </div>
      <div className='md:flex mb-6'>
        <div className='md:w-1/3'>
          <legend className='uppercase tracking-wide text-sm'>
            Cover Image
          </legend>
        </div>
        <div className='md:flex-1 px-3 text-center'>
          <div className='button bg-gold hover:bg-gold-dark text-cream mx-auto relative'>
            <input
              className='opacity-0 absolute pin-x pin-y hover:cursor-pointer'
              type='file'
              name='cover_image'
            />
            Add Cover Image
          </div>
        </div>
      </div>
    </form>
  );
};

export default AddPage;
