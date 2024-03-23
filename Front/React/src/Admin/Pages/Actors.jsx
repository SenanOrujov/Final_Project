import React, { useState } from "react";
import { DeleteOutlined, PlusOutlined, UserOutlined } from "@ant-design/icons";
import { message, Popconfirm, Button, Modal, Upload, Input } from "antd";
import { useQuery, useMutation } from "react-query";
import axios from "axios";
import ActorModal from "../components/Actor/ActorEditModal";
import ActorAddModal from "../components/Actor/ActorAddModel";

const Actors = () => {
  //get
  const {
    isLoading,
    error,
    data: actors,
  } = useQuery("actors", async () => {
    const response = await axios.get("http://localhost:5212/api/Actor");
    return response.data;
  });

  //delete
  const deleteMutation = useMutation(
    (actorId) => axios.delete(`http://localhost:5212/api/Actor/${actorId}`),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("actors");
        message.success("Actor deleted");
      },
      onError: (error) => {
        message.error("Error deleting actor" + error.message);
      },
    }
  );

  const handleDeleteConfirm = (actorId) => {
    deleteMutation.mutate(actorId);
  };

  //edit
  const editMutation = useMutation(
    (updatedActor) =>
      axios.put(
        `http://localhost:5212/api/Actor/${updatedActor.id}`,
        updatedActor
      ),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("actors");
        message.success("Actor updated");
      },
      onError: (error) => {
        message.error("Error deleting actor" + error.message);
      },
    }
  );
  //create
  const createMutation = useMutation(
    (newActor) => axios.post("http://localhost:5212/api/Actor", newActor),
    {
      onSuccess: () => {
        queryClient.invalidateQueries("actors");
        message.success("Actor created");
      },
      onError: (error) => {
        message.error("Error creating actor");
      },
    }
  );

  //modal
  const [openEditModel, setOpenEditModal] = useState(false);
  const showEditModal = () => {
    setOpenEditModal(true);
  };

  const [confirmEditLoading, setConfirmEditLoading] = useState(false);

  const handleEditOk = () => {
    setConfirmEditLoading(true);
    setTimeout(() => {
      setOpenEditModal(false);
      setConfirmEditLoading(false);
    }, 2000);
  };
  const handleEditCancel = () => {
    console.log("Clicked cancel button");
    setOpenEditModal(false);
  };

  //Addmodal
  const [openAddModel, setOpenAddModel] = useState(false);
  const showAddModal = () => {
    setOpenAddModel(true);
  };
  const [confirmAddLoading, setConfirmAddLoading] = useState(false);

  const handleAddOk = () => {
    setConfirmAddLoading(true);
    setTimeout(() => {
      setOpenAddModel(false);
      setConfirmAddLoading(false);
    }, 2000);
  };

  const handleAddCancel = () => {
    console.log("Clicked cancel button");
    setOpenAddModel(false);
  };

  //popconfrim delete
  const cancel = (e) => {
    console.log(e);
    message.error("Actor not deleted");
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
            <ActorAddModal
              open={openAddModel}
              handleAddOk={handleAddOk}
              handleAddCancel={handleAddCancel}
              confirmAddLoading={confirmAddLoading}
            />
          )}
          <h6 className='block antialiased tracking-normal font-sans text-base font-semibold leading-relaxed text-white'>
            Actors table
          </h6>
        </div>
        <div className='p-6 overflow-x-scroll px-0 pt-0 pb-2'>
          <table className='w-full min-w-[640px] table-auto'>
            <thead>
              <tr>
                <th className='border-b border-gray-50 py-3 px-5 text-left'>
                  <p className='block antialiased font-sans text-[11px] font-bold uppercase text-gray-400'>
                    Actor
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
              {isLoading ? (
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
              ) : actors && actors.length > 0 ? (
                actors.map((actor) => (
                  <tr key={actor.id}>
                    <td className='py-3 px-5 border-b border-gray-50'>
                      <div className='flex items-center gap-4'>
                        <img
                          src={actor.imageFilename}
                          className='inline-block relative object-cover object-center w-9 h-9 rounded-md'
                        />
                        <div>
                          <p className='block antialiased font-sans text-sm leading-normal text-gray-900 font-semibold capitalize'>
                            {actor.name} {actor.surname}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className='py-3 px-5 border-b border-gray-50'>
                      <div className='relative grid items-center uppercase whitespace-nowrap select-none bg-gradient-to-tr from-yellow-600 to-yellow-400 text-black rounded-lg py-1 px-2 text-[11px] font-bold w-fit'>
                        <span
                          onClick={() => window.open(actor.imdbLink)}
                          className='hover:cursor-pointer'
                        >
                          IMDB Link
                        </span>
                      </div>
                    </td>
                    <td className='py-3 px-5 border-b border-gray-50'>
                      <div
                        onClick={showEditModal}
                        className='block antialiased  text-xs font-semibold text--gray-600 hover:text-yellow-500 hover:cursor-pointer'
                      >
                        Edit
                      </div>
                      {openEditModel && (
                        <ActorModal
                          open={openEditModel}
                          actor={actor}
                          handleOk={handleEditOk}
                          handleCancel={handleEditCancel}
                          confirmLoading={confirmEditLoading}
                        />
                      )}
                    </td>
                    <td className='py-3 px-5 border-b border-gray-50'>
                      <Popconfirm
                        title='Delete the Actor'
                        description='Are you sure to delete this Actor?'
                        onConfirm={() => handleDeleteConfirm(actor.id)}
                        onCancel={cancel}
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
                    No actors found.
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

export default Actors;
