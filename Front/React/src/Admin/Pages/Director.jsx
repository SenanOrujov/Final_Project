import React, { useState } from "react";
import { DeleteOutlined, PlusOutlined, UserOutlined } from "@ant-design/icons";
import { message, Popconfirm, Button, Modal, Upload, Input } from "antd";
import { useQuery, useMutation, useQueryClient } from "react-query";
import {
  deleteDirector,
  getAllDirectors,
} from "../../services/Movie/directorService";
import AddModal from "../components/Movie/Director/AddModal";
import EditModal from "../components/Movie/Director/EditModal";

const Director = () => {
  const queryClient = useQueryClient();
  //get
  const {
    isLoading,
    isFetching,
    error,
    data: Directors,
  } = useQuery("Directors", async () => {
    const response = await getAllDirectors();
    return response.data;
  });

  //add modal
  const [openAddModel, setOpenAddModel] = useState(false);
  const showAddModal = () => {
    setOpenAddModel(true);
  };
  //edit modal
  const [openEditModel, setOpenEditModel] = useState(false);
  const showEditModal = (director) => {
    setOpenEditModel(true);
    setEditDirector(director);
  };

  //set ID
  const [editDirector, setEditDirector] = useState({});

  //delete
  const handleDeleteConfirm = async (DirectorId) => {
    try {
      message.loading("Deleting Director...", 0);
      await deleteDirector(DirectorId);
      message.destroy();
      message.success("Director deleted");
      queryClient.invalidateQueries("Directors");
    } catch (error) {
      message.error("Error deleting Director: " + error.message);
    }
  };

  return (
    <div className='mt-12 mb-8 flex flex-col gap-12'>
      <div className='relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md'>
        <div className='flex flex-row-reverse justify-between bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-gray-900 to-gray-800 text-white shadow-gray-900/20 shadow-lg -mt-6 mb-8 p-6'>
          <Button
            type='primary'
            shape='circle'
            icon={<PlusOutlined />}
            className='bg-green-600 border-green-600 hover:bg-green-600 hover:border-green-600 active:bg-green-600 hover:rotate-180 transition-all duration-700'
            onClick={showAddModal}
          />
          {openAddModel && (
            <AddModal open={openAddModel} setOpenAddModel={setOpenAddModel} />
          )}
          <h6 className='block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white'>
            Directors table
          </h6>
        </div>
        <div className='p-6 overflow-x-scroll px-0 pt-0 pb-2'>
          <table className='w-full min-w-[640px] table-auto'>
            <thead>
              <tr>
                <th className='border-b border-gray-50 py-3 px-5 text-left'>
                  <p className='block antialiased font-sans text-[11px] font-bold uppercase text-gray-400'>
                    Director
                  </p>
                </th>
                <th className='border-b border-gray-50 py-3 px-5 text-left'>
                  <p className='block antialiased font-sans text-[11px] font-bold uppercase text-gray-400'>
                    IMDB Link
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              {isLoading || isFetching ? (
                <tr>
                  <td colSpan={4} className='text-center py-4'>
                    Loading...
                  </td>
                </tr>
              ) : error ? (
                <tr>
                  <td colSpan={4} className='text-center py-4 text-red-500'>
                    Error fetching data!
                  </td>
                </tr>
              ) : Directors && Directors.length > 0 ? (
                Directors.map((director) => (
                  <tr key={director.id}>
                    <td className='py-3 px-5 border-b border-gray-50'>
                      <div className='flex items-center gap-4'>
                        <img
                          src={director.imageUrl}
                          className='inline-block relative object-cover object-center w-10 h-10 rounded-md'
                        />
                        <div>
                          <p className='block antialiased font-sans text-sm leading-normal text-gray-900 font-semibold capitalize'>
                            {director.name} {director.surname}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className='py-3 px-5 border-b border-gray-50'>
                      <div className='relative grid items-center uppercase whitespace-nowrap select-none bg-gradient-to-tr from-yellow-600 to-yellow-400 text-black rounded-lg py-1 px-2 text-[11px] font-bold w-fit'>
                        <span
                          onClick={() => window.open(director.imdbLink)}
                          className='hover:cursor-pointer'
                        >
                          IMDB Link
                        </span>
                      </div>
                    </td>
                    <td className='py-3 px-5 border-b border-gray-50'>
                      <div
                        onClick={() => {
                          showEditModal(director);
                        }}
                        className='block antialiased  text-xs font-semibold text--gray-600 hover:text-yellow-500 hover:cursor-pointer'
                      >
                        Edit
                      </div>
                      {openEditModel && (
                        <EditModal
                          open={openEditModel}
                          setOpenEditModel={setOpenEditModel}
                          director={editDirector}
                        />
                      )}
                    </td>
                    <td className='py-3 px-5 border-b border-gray-50'>
                      <Popconfirm
                        title='Delete the Director'
                        description='Are you sure to delete this Director?'
                        onConfirm={() => handleDeleteConfirm(director.id)}
                        okText={<span className='text-red-500'>Yes</span>}
                        cancelText='No'
                      >
                        <DeleteOutlined className='hover:text-red-800 hover:cursor-pointer' />
                      </Popconfirm>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className='text-center py-4'>
                    No Directors found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Director;
