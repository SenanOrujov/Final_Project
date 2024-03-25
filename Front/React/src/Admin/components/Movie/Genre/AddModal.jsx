import React, { useState } from "react";
import { Modal, Input, Upload, Form, message } from "antd";
import { useFormik } from "formik";
import { TagFilled } from "@ant-design/icons";
import { postGenre } from "../../../../services/Movie/genreService";
import { useMutation, useQueryClient } from "react-query";
import { genreSchema } from "../../../../validations/Movie/Genre/genreScheme";

const AddModal = ({ open, setOpenAddModel }) => {
  const [confirmAddLoading, setConfirmAddLoading] = useState(false);

  const handleAddCancel = () => {
    setOpenAddModel(false);
  };

  const formik = useFormik({
    initialValues: {
      genreName: "",
    },
    validationSchema: genreSchema,
    onSubmit: (values) => {
      postGenre(values)
        .then(() => {
          message.success("Genre added successfully");
        })
        .catch((error) => {
          message.error("Error adding genre" + error.message);
        })
        .finally(() => {
          setConfirmAddLoading(false);
          setOpenAddModel(false);
        });
    },
  });

  return (
    <Modal
      title='Create new genre'
      open={open}
      onOk={formik.handleSubmit}
      confirmLoading={confirmAddLoading}
      onCancel={handleAddCancel}
      okButtonProps={{
        style: { borderColor: "green", color: "black" },
      }}
      cancelButtonProps={{
        style: { borderColor: "red" },
      }}
    >
      <div className='flex flex-col gap-4'>
        <Form>
          <Form.Item label='Genre Name' validateStatus=''>
            <Input
              value={formik.values.genreName}
              name='genreName'
              onChange={formik.handleChange}
              placeholder='Enter genre name!'
              prefix={<TagFilled />}
            />
            {formik.errors.genreName && formik.touched.genreName && (
              <span style={{ color: "red" }}>{formik.errors.genreName}</span>
            )}
          </Form.Item>
        </Form>
      </div>
    </Modal>
  );
};

export default AddModal;
