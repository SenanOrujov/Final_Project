import React, { useState } from "react";
import { DeleteOutlined, PlusOutlined, UserOutlined } from "@ant-design/icons";
import { message, Popconfirm, Button, Modal, Upload, Input } from "antd";
import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { deleteGenre, getAllGenres } from "../../services/Movie/genreService";
import AddModal from "../components/Movie/Genre/AddModal";

const Genre = () => {
  const queryClient = useQueryClient();
  //get
  const {
    isLoading,
    isFetching,
    error,
    data: genres,
  } = useQuery("genres", async () => {
    const response = await getAllGenres();
    return response.data;
  });

  //add modal
  const [openAddModel, setOpenAddModel] = useState(false);
  const showAddModal = () => {
    setOpenAddModel(true);
  };
  //edit modal
  const [openEditModel, setOpenEditModel] = useState(false);
  const showEditModal = () => {
    setOpenEditModel(true);
  };

  //delete
  const handleDeleteConfirm = async (genreId) => {
    try {
      message.loading("Deleting genre...", 0);
      await deleteGenre(genreId);
      message.destroy();
      message.success("Genre deleted");
      queryClient.invalidateQueries("genres");
    } catch (error) {
      message.error("Error deleting genre: " + error.message);
    }
  };

  // const [confirmAddLoading, setConfirmAddLoading] = useState(false);

  // const handleAddOk = (values) => {
  //   setConfirmAddLoading(true);
  //   setTimeout(() => {
  //     setOpenAddModel(false);
  //     setConfirmAddLoading(false);
  //   }, 2000);
  // };

  // const handleAddCancel = () => {
  //   setOpenAddModel(false);
  // };

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
            Genres table
          </h6>
        </div>
        <div className='p-6 overflow-x-scroll px-0 pt-0 pb-2'>
          <table className='w-full min-w-[640px] table-auto'>
            <thead>
              <tr>
                <th className='border-b border-gray-50 py-3 px-5 text-left'>
                  <p className='block antialiased font-sans text-[11px] font-bold uppercase text-gray-400'>
                    Genre
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
              ) : genres && genres.length > 0 ? (
                genres.map((genre) => (
                  <tr key={genre.id}>
                    <td className='py-3 px-5 border-b border-gray-50'>
                      <div className='flex items-center gap-4'>
                        <div>
                          <p className='block antialiased font-sans text-sm leading-normal text-gray-900 font-semibold capitalize'>
                            {genre.name}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className='py-3 px-5 border-b border-gray-50'>
                      <div
                        // onClick={showEditModal}
                        className='block antialiased  text-xs font-semibold text--gray-600 hover:text-yellow-500 hover:cursor-pointer'
                      >
                        Edit
                      </div>
                      {/* {openEditModel && (
                        <ActorModal
                        //   open={openEditModel}
                        //   genre={genre}
                        //   handleOk={handleEditOk}
                        //   handleCancel={handleEditCancel}
                        //   confirmLoading={confirmEditLoading}
                        />
                      )} */}
                    </td>
                    <td className='py-3 px-5 border-b border-gray-50'>
                      <Popconfirm
                        title='Delete the Genre'
                        description='Are you sure to delete this Genre?'
                        onConfirm={() => handleDeleteConfirm(genre.id)}
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
                    No genres found.
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

export default Genre;
