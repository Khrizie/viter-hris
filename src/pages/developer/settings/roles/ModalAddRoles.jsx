<<<<<<< HEAD
import React from "react";
import { StoreContext } from "../../../../store/StoreContext";
import * as Yup from "yup";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { queryData } from "../../../../functions/custom-hooks/queryData";
import { apiVersion } from "../../../../functions/functions-general";
import {
  setIsAdd,
  setSuccess,
  setError,
  setMessage,
} from "../../../../store/StoreAction";
import ModalWrapperSide from "../../../../partials/modals/ModalWrapperSide";
import { FaTimes } from "react-icons/fa";
import { Formik, Form } from "formik";
import {
  InputText,
  InputTextArea,
} from "../../../../components/form-inputs/FormInputs";
import ButtonSpinner from "../../../../partials/spinners/ButtonSpinner";
import MessageError from "../../../../partials/MessageError";
=======
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { FaTimes } from "react-icons/fa";
import * as Yup from "yup";
import { InputText } from "../../../../components/form-input/FormInputs";
import { queryData } from "../../../../functions/custom-hooks/queryData";
import { apiVersion } from "../../../../functions/functions-general";
import MessageError from "../../../../partials/MessageError";
import ModalWrapperSide from "../../../../partials/modals/ModalWrapperSide";
import ButtonSpinner from "../../../../partials/spinners/ButtonSpinner";
import {
  setError,
  setIsAdd,
  setMessage,
  setSuccess,
} from "../../../../store/StoreAction";
import { StoreContext } from "../../../../store/StoreContext";
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874

const ModalAddRoles = ({ itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
<<<<<<< HEAD
          ? `${apiVersion}/controllers/developers/settings/roles/roles.php?id=${itemEdit.role_aid}` //update records
          : `${apiVersion}/controllers/developers/settings/roles/roles.php`, //create records
        itemEdit
          ? "put" //put if update a records and post if create new record
=======
          ? `${apiVersion}/controllers/developers/settings/roles/roles.php?id=${itemEdit.role_aid}`
          : //   update records
            `${apiVersion}/controllers/developers/settings/roles/roles.php`,
        //   create records
        itemEdit
          ? "put" //put if update a records
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
          : "post", // and post if create new record
        values,
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["roles"] });
<<<<<<< HEAD

      if (data.success) {
        dispatch(setSuccess(true));
        dispatch(setMessage(`Successfully ${itemEdit ? "updated" : "added"}`));
=======
      if (data.success) {
        dispatch(setSuccess(true));
        dispatch(setMessage(`successfully${itemEdit ? "updated" : "added"}`));
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
        dispatch(setIsAdd(false));
      }
      if (data.success == false) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
      }
    },
  });
<<<<<<< HEAD

=======
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
  const initVal = {
    ...itemEdit,
    role_name: itemEdit ? itemEdit.role_name : "",
    role_description: itemEdit ? itemEdit.role_description : "",
<<<<<<< HEAD
    role_name_old: itemEdit ? itemEdit.role_name : "",
  };
  const yupSchema = Yup.object({
    role_name: Yup.string().trim().required("required"),
    role_description: Yup.string().trim().required("required"),
=======

    role_name_old: itemEdit ? itemEdit.role_name : "",
  };
  const yupSchema = Yup.object({
    role_name: Yup.string().trim().required("required."),
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
  });
  const handleClose = () => {
    dispatch(setIsAdd(false));
  };

  React.useEffect(() => {
    dispatch(setError(false));
  }, []);

  return (
    <>
      <ModalWrapperSide
        handleClose={handleClose}
        className="transition-all ease-in-out transform duration-200"
      >
<<<<<<< HEAD
        {/* header */}
        <div className="moda-header relative mb-4">
=======
        {/* HEADER */}
        <div className="modal-header relative mb-4">
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
          <h3 className="text-dark text-sm">
            {itemEdit ? "Update" : "Add"} Role
          </h3>
          <button
            type="button"
            className="absolute top-0 right-4"
            onClick={handleClose}
          >
            <FaTimes />
          </button>
        </div>
<<<<<<< HEAD
        {/* body */}
=======
        {/* BODY */}
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
        <div className="modal-body">
          <Formik
            initialValues={initVal}
            validationSchema={yupSchema}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              dispatch(setError(false));
              mutation.mutate(values);
            }}
          >
            {(props) => {
<<<<<<< HEAD
=======
              console.log(props);
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
              return (
                <Form className="h-full">
                  <div className="modal-form-container">
                    <div className="modal-container">
<<<<<<< HEAD
                      {/* name */}
                      <div className="relative mb-6">
                        <InputText
                          label="Name"
=======
                      <div className="relative mt-5 mb-6">
                        <InputText
                          label="name"
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
                          name="role_name"
                          type="text"
                          disabled={mutation.isPending}
                        />
                      </div>
<<<<<<< HEAD
                      {/* description */}
                      <div className="relative mt-5 mb-6">
                        <InputTextArea
=======
                      <div className="relative mt-5 mb-6">
                        <InputText
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
                          label="Description"
                          name="role_description"
                          type="text"
                          disabled={mutation.isPending}
                        />
                      </div>
<<<<<<< HEAD
                      {store.error && <MessageError />}
                    </div>

                    {/* buttons */}
=======

                      {store.error && <MessageError />}
                    </div>

>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
                    <div className="modal-action">
                      <button
                        type="submit"
                        disabled={mutation.isPending || !props.dirty}
                        className="btn-modal-submit"
                      >
                        {mutation.isPending ? (
                          <ButtonSpinner />
                        ) : itemEdit ? (
                          "Save"
                        ) : (
                          "Add"
                        )}
                      </button>
                      <button
                        type="reset"
                        className="btn-modal-cancel"
                        onClick={handleClose}
                        disabled={mutation.isPending}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </ModalWrapperSide>
    </>
  );
};

export default ModalAddRoles;
