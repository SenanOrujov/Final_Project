import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { cinemaSchema } from "../../../validations/cinemaSchema";
import { getAllHallTypes } from "../../../services/Cinema/Hall/hallTypeService";
import { postCinema } from "../../../services/Cinema/cinemaService";
import { useQuery, useQueryClient } from "react-query";
import { Modal, message } from "antd";
import SeatsModal from "./SeatsModal";
import { useNavigate } from "react-router-dom";

const AddPage = ({ openAddPage, setOpenAddPage }) => {
  const { error, data: HallTypes } = useQuery("HallTypes", async () => {
    const response = await getAllHallTypes();
    return response.data;
  });

  const navigate = useNavigate();

  const formik = useFormik({
    validationSchema: cinemaSchema,
    initialValues: {
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
      halls: [{ name: "", capacity: "", row: "", column: "", hallTypeId: "" }],
    },

    onSubmit: (values) => {
      postCinema(values)
        .then(() => {
          message.success("Cinema added successfully");
        })
        .catch((error) => {
          message.error("Error adding Cinema" + error.message);
        })
        .finally(() => {
          navigate("/admin/cinema");
        });
    },
  });

  const addHall = () => {
    const newHall = {
      name: "",
      capacity: "",
      row: "",
      column: "",
      hallTypeId: "",
    };
    formik.setFieldValue("halls", [...formik.values.halls, newHall]);
  };

  const generateSeats = (index, row, column) => {
    const halls = [...formik.values.halls];
    const seats = [];
    for (let r = 1; r <= row; r++) {
      for (let c = 1; c <= column; c++) {
        seats.push({ row: r, column: c, status: "Available" });
      }
    }
    halls[index].seats = seats;
    formik.setFieldValue("halls", halls);
  };

  const deleteHall = (index) => {
    const updatedHalls = [...formik.values.halls];
    updatedHalls.splice(index, 1);
    formik.setFieldValue("halls", updatedHalls);
  };

  //seats modal
  // State for managing modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  // State for managing current hall index
  const [currentHallIndex, setCurrentHallIndex] = useState(null);

  const handleOpenModal = (index, row, column) => {
    generateSeats(index, row, column);
    setIsModalOpen(true);
    setCurrentHallIndex(index);
  };

  // Function to close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const hallType =
    HallTypes &&
    HallTypes.find(
      (type) => type.id == formik.values.halls[currentHallIndex]?.hallTypeId
    );

  return (
    <form onSubmit={formik.handleSubmit}>
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
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.errors.name && formik.touched.name && (
              <span style={{ color: "red" }}>{formik.errors.name}</span>
            )}
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
                onChange={formik.handleChange}
                value={formik.values.address}
              />
              {formik.errors.address && formik.touched.address && (
                <span style={{ color: "red" }}>{formik.errors.address}</span>
              )}
            </div>
            <div className='md:flex-1 md:pr-3'>
              <label className='block uppercase tracking-wide text-charcoal-darker text-xs font-bold'>
                City
              </label>
              <input
                className='w-full shadow-inner p-4 border-0'
                type='text'
                name='city'
                placeholder='Baku'
                onChange={formik.handleChange}
                value={formik.values.city}
              />
              {formik.errors.city && formik.touched.city && (
                <span style={{ color: "red" }}>{formik.errors.city}</span>
              )}
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
              onChange={formik.handleChange}
              value={formik.values.phone}
            />
            {formik.errors.phone && formik.touched.phone && (
              <span style={{ color: "red" }}>{formik.errors.phone}</span>
            )}
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
            onChange={formik.handleChange}
            value={formik.values.description}
            name='description'
          ></textarea>
          {formik.errors.description && formik.touched.description && (
            <span style={{ color: "red" }}>{formik.errors.description}</span>
          )}
        </div>
      </div>
      {/* <div className='md:flex mb-6'>
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
      </div> */}
      <div className='md:flex my-12'>
        <div className='md:w-1/3'>
          <legend className='uppercase tracking-wide text-sm'>
            Cinema Hours
          </legend>
        </div>
        <div className='md:flex-1 mt-2 mb:mt-0 md:px-3'>
          {formik.values.cinemaHours.map((hour, index) => (
            <div key={index} className='mb-4'>
              <label className='block uppercase tracking-wide text-xs font-bold'>
                Day {index + 1}
              </label>
              <div className='flex items-center'>
                <input
                  type='checkbox'
                  name={`cinemaHours.${index}.isClosed`}
                  checked={hour.isClosed}
                  onChange={formik.handleChange}
                />
                <span className='ml-2 text-sm'>Closed</span>
              </div>
              {!hour.isClosed && (
                <div className='flex items-center mt-2'>
                  <span className='mr-2'>Opening Time:</span>
                  <input
                    type='time'
                    name={`cinemaHours.${index}.openingTime`}
                    value={hour.openingTime || ""}
                    onChange={formik.handleChange}
                  />
                  <span className='mr-2'>Closing Time:</span>
                  <input
                    type='time'
                    name={`cinemaHours.${index}.closingTime`}
                    value={hour.closingTime || ""}
                    onChange={formik.handleChange}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      {formik.values.halls.map((hall, index) => (
        <div key={index} className='md:flex mb-8'>
          <div className='md:w-1/3'>
            <legend className='uppercase tracking-wide text-sm'>Hall</legend>
          </div>
          <div className='md:flex-1 mt-2 mb:mt-0 md:px-3'>
            <div className='mb-4'>
              <label className='block uppercase tracking-wide text-xs font-bold'>
                Name
              </label>
              <input
                className='w-full shadow-inner p-4 border-0'
                type='text'
                name={`halls.${index}.name`}
                placeholder='Hall Name'
                onChange={formik.handleChange}
                value={formik.values.halls[index].name}
              />
              {formik.errors.halls && formik.touched.halls && (
                <span style={{ color: "red" }}>
                  {formik.errors.halls[index].name}
                </span>
              )}
            </div>
            <div className='md:flex mb-4'>
              <div className='md:flex-1 md:pr-3'>
                <label className='block uppercase tracking-wide text-charcoal-darker text-xs font-bold'>
                  Capacity
                </label>
                <input
                  className='w-full shadow-inner p-4 border-0'
                  type='number'
                  name={`halls.${index}.capacity`}
                  placeholder='Enter hall capacity!'
                  onChange={formik.handleChange}
                  value={formik.values.halls[index].capacity}
                />
                {formik.errors.halls && formik.touched.halls && (
                  <span style={{ color: "red" }}>
                    {formik.errors.halls[index].capacity}
                  </span>
                )}
              </div>
              <div className='md:flex-1 md:pr-3'>
                <label className='block uppercase tracking-wide text-charcoal-darker text-xs font-bold'>
                  Row
                </label>
                <input
                  className='w-full shadow-inner p-4 border-0'
                  type='number'
                  name={`halls.${index}.row`}
                  placeholder='Enter hall row!'
                  onChange={formik.handleChange}
                  value={formik.values.halls[index].row}
                />
                {formik.errors.halls && formik.touched.halls && (
                  <span style={{ color: "red" }}>
                    {formik.errors.halls[index].row}
                  </span>
                )}
              </div>
              <div className='md:flex-1 md:pr-3'>
                <label className='block uppercase tracking-wide text-charcoal-darker text-xs font-bold'>
                  Column
                </label>
                <input
                  className='w-full shadow-inner p-4 border-0'
                  type='number'
                  name={`halls.${index}.column`}
                  placeholder='Enter hall column!'
                  onChange={formik.handleChange}
                  value={formik.values.halls[index].column}
                />
                {formik.errors.halls && formik.touched.halls && (
                  <span style={{ color: "red" }}>
                    {formik.errors.halls[index].column}
                  </span>
                )}
              </div>
            </div>
            <div className='my-8'>
              <label className='block uppercase tracking-wide text-xs font-bold'>
                Hall Types
              </label>
              <select
                name={`halls.${index}.hallTypeId`}
                onChange={formik.handleChange}
                value={formik.values.halls[index].hallTypeId}
              >
                <option value=''>Hall Type</option>
                {HallTypes &&
                  HallTypes.map((type) => (
                    <option key={type.id} value={type.id}>
                      {type.name}
                    </option>
                  ))}
              </select>
              {formik.errors.halls && formik.touched.halls && (
                <div style={{ color: "red" }}>
                  {formik.errors.halls[index].hallTypeId}
                </div>
              )}
            </div>
            <div className='flex justify-between'>
              <button
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg'
                onClick={() => handleOpenModal(index, hall.row, hall.column)}
                type='button'
              >
                Seats
              </button>
              {/* Seats */}
              <Modal
                title='Seats'
                open={isModalOpen}
                onOk={handleCloseModal}
                onCancel={handleCloseModal}
                width={"max-content"}
                okButtonProps={{
                  style: { borderColor: "green", color: "black" },
                }}
                cancelButtonProps={{
                  style: { borderColor: "red" },
                }}
              >
                {currentHallIndex !== null && (
                  <>
                    <SeatsModal
                      hall={formik.values.halls[currentHallIndex]}
                      hallPrice={hallType.price}
                      formik={formik}
                    />
                  </>
                )}
              </Modal>
              <button
                className='hover:text-white/90 bg-red-600 w-20 h-10 text-white rounded-lg hover:bg-red-700 ease-in-out duration-300'
                type='button'
                onClick={() => deleteHall(index)}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ))}
      <button
        className='w-[6rem] h-10 bg-green-400 rounded-lg m-2 hover:bg-green-600 ease-in-out duration-300 font-bold text-black/75'
        type='button'
        onClick={addHall}
      >
        Add Hall
      </button>
      <button
        className='ml-5 w-[6rem] h-10 bg-blue-500 rounded-lg m-2 hover:bg-blue-600 ease-in-out duration-300 font-bold text-black/75'
        type='submit'
      >
        Submit
      </button>
    </form>
  );
};

export default AddPage;
