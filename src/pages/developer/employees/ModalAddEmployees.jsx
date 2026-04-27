<<<<<<< HEAD
import React from "react";
import { StoreContext } from "../../../store/StoreContext";
import * as Yup from "yup";
// import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiVersion } from "../../../functions/functions-general";
import {
  setIsAdd,
  setSuccess,
  setError,
  setMessage,
} from "../../../store/StoreAction";
import ModalWrapperSide from "../../../partials/modals/ModalWrapperSide";
import { FaTimes } from "react-icons/fa";
import { InputText } from "../../../components/form-inputs/FormInputs";
import ButtonSpinner from "../../../partials/spinners/ButtonSpinner";
import MessageError from "../../../partials/MessageError";
import { queryData } from "../../../functions/custom-hooks/queryData";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";

const EmployeesAdd = ({ itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();

=======
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Form, Formik } from "formik";
import React from "react";
import { FaTimes } from "react-icons/fa";
import * as Yup from "yup";
import { InputText } from "../../../components/form-input/FormInputs";
import { queryData } from "../../../functions/custom-hooks/queryData";
import { apiVersion } from "../../../functions/functions-general";
import MessageError from "../../../partials/MessageError";
import ModalWrapperSide from "../../../partials/modals/ModalWrapperSide";
import ButtonSpinner from "../../../partials/spinners/ButtonSpinner";
import {
  setError,
  setIsAdd,
  setMessage,
  setSuccess,
} from "../../../store/StoreAction";
import { StoreContext } from "../../../store/StoreContext";

const ModalAddEmployees = ({ itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `${apiVersion}/controllers/developers/employees/employees.php?id=${itemEdit.employee_aid}`
<<<<<<< HEAD
          : `${apiVersion}/controllers/developers/employees/employees.php`,
        itemEdit ? "put" : "post",
=======
          : //   update records
            `${apiVersion}/controllers/developers/employees/employees.php`,
        //   create records
        itemEdit
          ? "put" //put if update a records
          : "post", // and post if create new record
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
        values,
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["employees"] });
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

  const initVal = {
=======
  const initVal = {
    ...itemEdit,
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
    employee_first_name: itemEdit ? itemEdit.employee_first_name : "",
    employee_middle_name: itemEdit ? itemEdit.employee_middle_name : "",
    employee_last_name: itemEdit ? itemEdit.employee_last_name : "",
    employee_email: itemEdit ? itemEdit.employee_email : "",
<<<<<<< HEAD
    employee_first_name_old: itemEdit ? itemEdit.employee_first_name : "",
  };

  const yupSchema = Yup.object({
    employee_first_name: Yup.string().trim().required("Required"),
    employee_middle_name: Yup.string().trim().required("Required"),
    employee_last_name: Yup.string().trim().required("Required"),
    employee_email: Yup.string()
      .trim()
      .email("Invalid email")
      .required("Required"),
  });

=======

    employee_first_name_old: itemEdit ? itemEdit.employee_first_name : "",
    employee_middle_name_old: itemEdit ? itemEdit.employee_middle_name : "",
    employee_last_name_old: itemEdit ? itemEdit.employee_last_name : "",
    employee_email_old: itemEdit ? itemEdit.employee_email : "",
  };
  const yupSchema = Yup.object({
    employee_first_name: Yup.string().trim().required("required."),
    employee_middle_name: Yup.string().trim().required("required."),
    employee_last_name: Yup.string().trim().required("required."),
    employee_email: Yup.string().trim().required("required."),
  });
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
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
        <div className="moda-header relative mb-4">
          <h3 className="text-dark text-sm">
            {itemEdit ? "Update" : "Add"} Employee
=======
        {/* HEADER */}
        <div className="modal-header relative mb-4">
          <h3 className="text-dark text-sm">
            {itemEdit ? "Update" : "Add"} employee
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

=======
        {/* BODY */}
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
        <div className="modal-body">
          <Formik
            initialValues={initVal}
            validationSchema={yupSchema}
<<<<<<< HEAD
            onSubmit={async (values) => {
=======
            onSubmit={async (values, { setSubmitting, resetForm }) => {
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
              dispatch(setError(false));
              mutation.mutate(values);
            }}
          >
<<<<<<< HEAD
            {(props) => (
              <Form className="h-full">
                <div className="modal-form-container">
                  <div className="modal-container">
                    <div className="relative mb-6">
                      <InputText
                        label="First Name"
                        name="employee_first_name"
                        type="text"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="relative mb-6">
                      <InputText
                        label="Middle Name"
                        name="employee_middle_name"
                        type="text"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="relative mb-6">
                      <InputText
                        label="Last Name"
                        name="employee_last_name"
                        type="text"
                        disabled={mutation.isPending}
                      />
                    </div>
                    <div className="relative mb-6">
                      <InputText
                        label="Email"
                        name="employee_email"
                        type="email"
                        disabled={mutation.isPending}
                      />
                    </div>
                    {store.error && <MessageError />}
                  </div>

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
            )}
=======
            {(props) => {
              console.log(props);
              return (
                <Form className="h-full">
                  <div className="modal-form-container">
                    <div className="modal-container">
                      <div className="relative mt-5 mb-6">
                        <InputText
                          label="First name"
                          name="employee_first_name"
                          type="text"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="relative mt-5 mb-6">
                        <InputText
                          label="Middle name"
                          name="employee_middle_name"
                          type="text"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="relative mt-5 mb-6">
                        <InputText
                          label="Last name"
                          name="employee_last_name"
                          type="text"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="relative mt-5 mb-6">
                        <InputText
                          label="Email"
                          name="employee_email"
                          type="text"
                          disabled={mutation.isPending}
                        />
                      </div>
                      {store.error && <MessageError />}
                    </div>

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
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
          </Formik>
        </div>
      </ModalWrapperSide>
    </>
  );
};

<<<<<<< HEAD
export default EmployeesAdd;
=======
export default ModalAddEmployees;
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
