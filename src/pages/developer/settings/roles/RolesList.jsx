import React from "react";
import useQueryData from "../../../../functions/custom-hooks/useQueryData";
import {
  apiVersion,
  formatDate,
} from "../../../../functions/functions-general";
import NoData from "../../../../partials/NoData";
import FetchingSpinner from "../../../../partials/spinners/FetchingSpinner";
import TableLoading from "../../../../partials/TableLoading";
import { FaArchive, FaEdit, FaTrash, FaTrashRestore } from "react-icons/fa";
import { StoreContext } from "../../../../store/StoreContext";
import {
  setIsAdd,
  setIsArchive,
  setIsDelete,
  setIsRestore,
} from "../../../../store/StoreAction";
import Status from "../../../../partials/Status";
import ModalArchive from "../../../../partials/modals/ModalArchive";
import ModalRestore from "../../../../partials/modals/ModalRestore";
import ModalDelete from "../../../../partials/modals/ModalDelete";

<<<<<<< HEAD
const RolesList = ({ setItemEdit, itemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);

=======
const RolesList = ({ itemEdit, setItemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
  const {
    isLoading,
    isFetching,
    data: dataRoles,
  } = useQueryData(
<<<<<<< HEAD
    `${apiVersion}/controllers/developers/settings/roles/roles.php`, //api path file
    "get", //method reques(get,post,put,delete)
=======
    `${apiVersion}/controllers/developers/settings/roles/roles.php`, //api patch file
    "get", //method request (get, post,)
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
    "roles", //query key
  );
  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item);
  };
<<<<<<< HEAD

  const handleArchive = (item) => {
    dispatch(setIsArchive(true));
    setItemEdit(item);
  };

  const handleRestore = (item) => {
    dispatch(setIsRestore(true));
    setItemEdit(item);
  };

  const handleDelete = (item) => {
    dispatch(setIsDelete(true));
    setItemEdit(item);
  };

  return (
    <>
      <div className="relative pt-4 rounded-md ">
=======
  const handleArchive = (item) => {
    setItemEdit(item);
    dispatch(setIsArchive(true));
  };
  const handleRestore = (item) => {
    setItemEdit(item);
    dispatch(setIsRestore(true));
  };
  const handleDelete = (item) => {
    setItemEdit(item);
    dispatch(setIsDelete(true));
  };
  console.log(itemEdit);

  return (
    <>
      <div className="relative pt-4 rounded-md">
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
        {isFetching && !isLoading && <FetchingSpinner />}
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Status</th>
              <th>Role</th>
              <th>Description</th>
              <th>Created</th>
<<<<<<< HEAD
              <th>Date update</th>
=======
              <th>Date Update</th>
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
              <th></th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan="100%" className="p-10">
                  <TableLoading cols={2} count={20} />
                </td>
              </tr>
            ) : dataRoles?.count == 0 ? (
              <tr>
                <td colSpan="100%" className="p-10">
                  <NoData />
                </td>
              </tr>
            ) : (
              dataRoles?.data.map((item, key) => {
                return (
                  <tr key={key}>
<<<<<<< HEAD
                    <td>{key + 1}</td>
=======
                    <td>{key + 1}.</td>
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
                    <td>
                      <Status
                        text={`${item.role_is_active == 1 ? "active" : "inactive"}`}
                      />
                    </td>
                    <td>{item.role_name}</td>
                    <td>{item.role_description}</td>
                    <td>{formatDate(item.role_created, "--", "short-date")}</td>
                    <td>{formatDate(item.role_updated, "--", "short-date")}</td>
                    <td>
                      <div className="flex items-center gap-3">
                        {item.role_is_active == 1 ? (
                          <>
<<<<<<< HEAD
                            {/* edit */}
                            <button
                              type="button"
                              className="tooltip-action-table"
                              data-tooltip="Edit"
=======
                            <button
                              type="button"
                              className="tooltip-action-table"
                              data-tooltip="edit"
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
                              onClick={() => handleEdit(item)}
                            >
                              <FaEdit />
                            </button>
<<<<<<< HEAD
                            {/* archive */}
=======
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
                            <button
                              type="button"
                              className="tooltip-action-table"
                              data-tooltip="Archive"
                              onClick={() => handleArchive(item)}
                            >
                              <FaArchive />
                            </button>
                          </>
                        ) : (
                          <>
                            <button
                              type="button"
                              className="tooltip-action-table"
                              data-tooltip="Restore"
                              onClick={() => handleRestore(item)}
                            >
                              <FaTrashRestore />
                            </button>
                            <button
                              type="button"
                              className="tooltip-action-table"
                              data-tooltip="Delete"
                              onClick={() => handleDelete(item)}
                            >
                              <FaTrash />
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {store.isArchive && (
        <ModalArchive
          mysqlApiArchive={`${apiVersion}/controllers/developers/settings/roles/active.php?id=${itemEdit.role_aid}`}
          msg="Are you sure you want to archive this record?"
<<<<<<< HEAD
          successMsg="sucessfully archived."
=======
          successMsg="Successfully archived."
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
          item={itemEdit.role_name}
          dataItem={itemEdit}
          queryKey="roles"
        />
      )}
      {store.isRestore && (
        <ModalRestore
          mysqlApiRestore={`${apiVersion}/controllers/developers/settings/roles/active.php?id=${itemEdit.role_aid}`}
          msg="Are you sure you want to restore this record?"
<<<<<<< HEAD
          successMsg="sucessfully restore."
=======
          successMsg="Successfully restore."
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
          item={itemEdit.role_name}
          dataItem={itemEdit}
          queryKey="roles"
        />
      )}
      {store.isDelete && (
        <ModalDelete
          mysqlApiDelete={`${apiVersion}/controllers/developers/settings/roles/roles.php?id=${itemEdit.role_aid}`}
          msg="Are you sure you want to delete this record?"
<<<<<<< HEAD
          successMsg="sucessfully deleted."
=======
          successMsg="Successfully deleted."
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
          item={itemEdit.role_name}
          dataItem={itemEdit}
          queryKey="roles"
        />
      )}
    </>
  );
};

export default RolesList;
