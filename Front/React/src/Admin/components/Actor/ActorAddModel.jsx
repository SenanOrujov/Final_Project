import React, { useState, useEffect } from "react";
import { Modal, Input, Upload, Form } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { useQuery, useMutation, queryClient } from "react-query";
import axios from "axios";
import { Formik, Field, ErrorMessage, Form as FormikForm } from "formik";
import { actorAddSchema } from "../../../validations/Actor/ActorAddSchema";

const ActorAddModal = ({
  open,
  handleAddOk,
  handleAddCancel,
  confirmAddLoading,
}) => {
  return (
    <Modal
      title='Create new actor'
      open={open}
      onOk={handleAddOk}
      confirmLoading={confirmAddLoading}
      onCancel={handleAddCancel}
      okButtonProps={{
        className: "text-black border-black",
      }}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={actorAddSchema}
        onSubmit={handleAddOk}
      >
        <FormikForm>
          <div className='flex flex-col gap-4'>
            <Input placeholder='Enter Name' prefix={<UserOutlined />} />
            <ErrorMessage
              name='name'
              component='div'
              className='text-red-500 text-xs'
            />

            <Input placeholder='Enter Surname' prefix={<UserOutlined />} />
            <ErrorMessage
              name='surname'
              component='div'
              className='text-red-500 text-xs'
            />

            <Input placeholder='IMDB Link' prefix={<UserOutlined />} />
            <ErrorMessage
              name='imdbLink'
              component='div'
              className='text-red-500 text-xs'
            />
          </div>
        </FormikForm>
      </Formik>
    </Modal>
  );
};

export default ActorAddModal;
