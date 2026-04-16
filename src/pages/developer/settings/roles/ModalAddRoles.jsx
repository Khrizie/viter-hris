import React from "react";
import { StoreContext } from "../../../../store/StoreContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiVersion } from "../../../../functions/functions-general";
import {
  setError,
  setIsAdd,
  setMessage,
  setSuccess,
} from "../../../../store/StoreAction";
import * as Yup from "yup";
import { queryData } from "../../../../functions/custom-hooks/queryData";
import ModalWrapperSide from "../../../../partials/modals/ModalWrapperSide";
import { FaTimes } from "react-icons/fa";
import { Form, Formik } from "formik";
import { InputText } from "../../../../components/form-input/FormInputs";
import ButtonSpinner from "../../../../partials/spinners/ButtonSpinner";
import MessageError from "../../../../partials/MessageError";

const ModalAddRoles = ({ itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (values) =>
      queryData(
        itemEdit
          ? `${apiVersion}/controllers/developers/settings/roles/roles.php?id=${itemEdit.role_aid}`
          : //   update records
            `${apiVersion}/controllers/developers/settings/roles/roles.php`,
        //   create records
        itemEdit
          ? "put" //put if update a records
          : "post", // and post if create new record
        values,
      ),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["roles"] });
      if (data.success) {
        dispatch(setSuccess(true));
        dispatch(setMessage(`successfully${itemEdit ? "updated" : "added"}`));
        dispatch(setIsAdd(false));
      }
      if (data.success == false) {
        dispatch(setError(true));
        dispatch(setMessage(data.error));
      }
    },
  });
  const initVal = {
    ...itemEdit,
    role_name: itemEdit ? itemEdit.role_name : "",
    role_description: itemEdit ? itemEdit.role_description : "",

    role_name_old: itemEdit ? itemEdit.role_name : "",
  };
  const yupSchema = Yup.object({
    role_name: Yup.string().trim().required("required."),
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
        {/* HEADER */}
        <div className="modal-header relative mb-4">
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
        {/* BODY */}
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
              console.log(props);
              return (
                <Form className="h-full">
                  <div className="modal-form-container">
                    <div className="modal-container">
                      <div className="relative mt-5 mb-6">
                        <InputText
                          label="name"
                          name="role_name"
                          type="text"
                          disabled={mutation.isPending}
                        />
                      </div>
                      <div className="relative mt-5 mb-6">
                        <InputText
                          label="Description"
                          name="role_description"
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
          </Formik>
        </div>
      </ModalWrapperSide>
    </>
  );
};

export default ModalAddRoles;
