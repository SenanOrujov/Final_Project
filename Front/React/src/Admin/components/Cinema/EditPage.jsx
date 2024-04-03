import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import { editCinema } from "../../../services/Cinema/cinemaService";
import { cinemaSchema } from "../../../validations/cinemaSchema";
import { message } from "antd";

const EditPage = ({ cinema, open, setOpenEditPage }) => {
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
      editCinema(values, cinema.id)
        .then(() => {
          message.success("Cinema updated successfully");
        })
        .catch((error) => {
          message.error("Error updating Cinema" + error.message);
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

  return <></>;
};

export default EditPage;
