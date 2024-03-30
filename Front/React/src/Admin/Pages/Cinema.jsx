import React, { useState } from "react";
import { DeleteOutlined, PlusOutlined, UserOutlined } from "@ant-design/icons";
import { message, Popconfirm, Button, Modal, Upload, Input } from "antd";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { getAllCinemas } from "../../services/Cinema/cinemaService";
import AddPage from "../components/Cinema/AddPage";
import { useNavigate } from "react-router-dom";

const Cinema = () => {
  const queryClient = useQueryClient();
  //get
  const {
    isLoading,
    isFetching,
    error,
    data: Cinemas,
  } = useQuery("Cinemas", async () => {
    const response = await getAllCinemas();
    return response.data;
  });

  //add page
  const navigation = useNavigate();
  const [openAddPage, setOpenAddPage] = useState(false);
  const showAddPage = () => {
    setOpenAddPage(true);
    navigation("/admin/cinema/add");
  };
  //edit modal
  const [openEditModel, setOpenEditModel] = useState(false);
  const showEditModal = (Cinema) => {
    setOpenEditModel(true);
    setEditCinema(Cinema);
  };

  //set ID
  const [editCinema, setEditCinema] = useState({});

  //delete
  const handleDeleteConfirm = async (CinemaId) => {
    try {
      message.loading("Deleting Cinema...", 0);
      await deleteCinema(CinemaId);
      message.destroy();
      message.success("Cinema deleted");
      queryClient.invalidateQueries("Cinemas");
    } catch (error) {
      message.error("Error deleting Cinema: " + error.message);
    }
  };

  //description modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
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
            onClick={showAddPage}
          />
          {openAddPage && (
            <AddPage
              openAddPage={openAddPage}
              setOpenAddPage={setOpenAddPage}
            />
          )}
          <h6 className='block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white'>
            Cinemas table
          </h6>
        </div>
        <div className='p-6 overflow-x-scroll px-0 pt-0 pb-2'>
          <table className='w-full min-w-[640px] table-auto'>
            <thead>
              <tr>
                <th className='border-b border-gray-50 py-3 px-5 text-left'>
                  <p className='block antialiased font-sans text-[11px] font-bold uppercase text-gray-400'>
                    Cinema
                  </p>
                </th>
                <th className='border-b border-gray-50 py-3 px-5 text-left'>
                  <p className='block antialiased font-sans text-[11px] font-bold uppercase text-gray-400'>
                    Description
                  </p>
                </th>
                <th className='border-b border-gray-50 py-3 px-5 text-left'>
                  <p className='block antialiased font-sans text-[11px] font-bold uppercase text-gray-400'>
                    Price
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
              ) : Cinemas && Cinemas.length > 0 ? (
                Cinemas.map((Cinema) => (
                  <tr key={Cinema.id}>
                    <td className='py-3 px-5 border-b border-gray-50'>
                      <div className='flex items-center gap-4'>
                        <div>
                          <p className='block antialiased font-sans text-sm leading-normal text-gray-900 font-semibold capitalize'>
                            {Cinema.name}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className='py-3 px-5 border-b border-gray-50'>
                      <div className='flex items-center gap-4'>
                        <div>
                          <p className='block antialiased font-sans text-sm leading-normal text-gray-900 capitalize font-normal'>
                            {Cinema.description}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className='py-3 px-5 border-b border-gray-50'>
                      <div className='flex items-center gap-4'>
                        <div>
                          <p className='block antialiased font-sans text-sm leading-normal text-gray-900 font-semibold capitalize'>
                            {Cinema.price}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className='py-3 px-5 border-b border-gray-50'>
                      <div
                        onClick={() => {
                          showEditModal(Cinema);
                        }}
                        className='block antialiased  text-xs font-semibold text--gray-600 hover:text-yellow-500 hover:cursor-pointer'
                      >
                        Edit
                      </div>
                      {openEditModel && (
                        <EditModal
                          open={openEditModel}
                          setOpenEditModel={setOpenEditModel}
                          Cinema={editCinema}
                        />
                      )}
                    </td>
                    <td className='py-3 px-5 border-b border-gray-50'>
                      <Popconfirm
                        title='Delete the Cinema'
                        description='Are you sure to delete this Cinema?'
                        onConfirm={() => handleDeleteConfirm(Cinema.id)}
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
                    No Cinemas found.
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

export default Cinema;
