import React from "react";
import { Modal, Input } from "antd";
import { UserOutlined } from "@ant-design/icons";

const ActorEditModal = ({
  open,
  actor,
  handleOk,
  handleCancel,
  confirmLoading,
}) => {
  return (
    <Modal
      title='Edit actor'
      open={open}
      onOk={handleOk}
      confirmLoading={confirmLoading}
      onCancel={handleCancel}
      okButtonProps={{
        className: "text-black border-black",
      }}
    >
      <div className='flex flex-col gap-4'>
        <Input
          placeholder='Enter Name'
          prefix={<UserOutlined />}
          defaultValue={actor.name}
        />
        <Input
          placeholder='Enter Surname'
          prefix={<UserOutlined />}
          defaultValue={actor.surname}
        />
        <Input
          placeholder='IMDB Link'
          prefix={<UserOutlined />}
          defaultValue={actor.imdbLink}
        />
      </div>
    </Modal>
  );
};

export default ActorEditModal;
