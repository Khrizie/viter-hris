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
  InputSelect,
  InputText,
  InputTextArea,
} from "../../../../components/form-inputs/FormInputs";
import ButtonSpinner from "../../../../partials/spinners/ButtonSpinner";
import MessageError from "../../../../partials/MessageError";
=======
import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { FaTimes } from "react-icons/fa";
import * as Yup from "yup";
import {
  InputSelect,
  InputText,
} from "../../../../components/form-input/FormInputs";
import { queryData } from "../../../../functions/custom-hooks/queryData";
import { apiVersion } from "../../../../functions/functions-general";
import ModalWrapperSide from "../../../../partials/modals/ModalWrapperSide";
import ButtonSpinner from "../../../../partials/spinners/ButtonSpinner";
import {
  setError,
  setIsAdd,
  setMessage,
  setSuccess,
} from "../../../../store/StoreAction";
import { StoreContext } from "../../../../store/StoreContext";
import MessageError from "../../../../partials/MessageError";
import { Form, Formik } from "formik";
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874

const ModalAddUsers = ({ itemEdit, filterArrayActiveRoles }) => {
  const { store, dispatch } = React.useContext(StoreContext);

  console.log(filterArrayActiveRoles);

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
<<<<<<< HEAD
          ? `${apiVersion}/controllers/developers/settings/users/users.php?id=${itemEdit.users_aid}` //update records
          : `${apiVersion}/controllers/developers/settings/users/users.php`, //create records
        itemEdit
          ? "put" //put if update a records and post if create new record
=======
          ? `${apiVersion}/controllers/developers/settings/users/users.php?id=${itemEdit.users_aid}`
          : //   update records
            `${apiVersion}/controllers/developers/settings/users/users.php`,
        //   create records
        itemEdit
          ? "put" //put if update a records
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
          : "post", // and post if create new record
        values,
      ),
    onSuccess: (data) => {
<<<<<<< HEAD
      queryClient.invalidateQueries({ queryKey: ["users"] });

      if (data.success) {
        dispatch(setSuccess(true));
        dispatch(setMessage(`Successfully ${itemEdit ? "updated" : "added"}`));
=======
      queryClient.invalidateQueries({ queryKey: ["roles"] });
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
    users_role_id: itemEdit ? itemEdit.users_role_id : "",
    users_first_name: itemEdit ? itemEdit.users_first_name : "",
    users_last_name: itemEdit ? itemEdit.users_last_name : "",
    users_password: itemEdit ? itemEdit.users_password : "",
    users_email: itemEdit ? itemEdit.users_email : "",

<<<<<<< HEAD
    users_first_name_old: itemEdit ? itemEdit.users_first_name : "",
    users_last_name_old: itemEdit ? itemEdit.users_last_name : "",
    users_email_old: itemEdit ? itemEdit.users_email : "",
  };
  const yupSchema = Yup.object({
    users_role_id: Yup.string().trim().required("required"),
    users_first_name: Yup.string().trim().required("required"),
    users_last_name: Yup.string().trim().required("required"),
    users_email: Yup.string()
      .trim()
      .email("Invalid email")
      .required("required"),
=======
    users_email_old: itemEdit ? itemEdit.users_email : "",
  };
  const yupSchema = Yup.object({
    users_role_id: Yup.string().trim().required("required."),
    users_first_name: Yup.string().trim().required("required."),
    users_last_name: Yup.string().trim().required("required."),
    users_email: Yup.string()
      .trim()
      .email("Invalid email.")
      .required("required."),
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
          <h3 className="text-dark text-sm">
            {itemEdit ? "Update" : "Add"} Users
=======
        {/* HEADER */}
        <div className="modal-header relative mb-4">
          <h3 className="text-dark text-sm">
            {itemEdit ? "Update" : "Add"} Role
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
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
=======
                      <div className="relative mt-5 mb-6">
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
                        <InputText
                          label="First Name"
                          name="users_first_name"
                          type="text"
                          disabled={mutation.isPending}
                        />
                      </div>
<<<<<<< HEAD
                      {/* description */}
=======
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
                      <div className="relative mt-5 mb-6">
                        <InputText
                          label="Last Name"
                          name="users_last_name"
                          type="text"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="relative mt-5 mb-6">
                        <InputText
                          label="Email"
                          name="users_email"
                          type="text"
                          disabled={mutation.isPending}
                        />
                      </div>
<<<<<<< HEAD

=======
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
                      <div className="relative mt-5 mb-6">
                        <InputSelect
                          label="Role"
                          name="users_role_id"
                          type="text"
                          disabled={mutation.isPending}
                        >
                          <optgroup label="Select a role">
                            <option value="" hidden>
                              --
                            </option>
                            {filterArrayActiveRoles.map((item, key) => {
                              return (
                                <option key={key} value={item.role_aid}>
                                  {item.role_name}
                                </option>
                              );
                            })}
                          </optgroup>
                        </InputSelect>
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

export default ModalAddUsers;
