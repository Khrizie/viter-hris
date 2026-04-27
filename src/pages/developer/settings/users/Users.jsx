import React from "react";
<<<<<<< HEAD
import Layout from "../../Layout";
import UsersList from "./UsersList";
import { setIsAdd } from "../../../../store/StoreAction";
import { StoreContext } from "../../../../store/StoreContext";
import { FaPlus } from "react-icons/fa";
import ModalAddUsers from "./ModalAddUsers";
import useQueryData from "../../../../functions/custom-hooks/useQueryData";
import { apiVersion } from "../../../../functions/functions-general";
import ButtonSpinner from "../../../../partials/spinners/ButtonSpinner";
=======
import { StoreContext } from "../../../../store/StoreContext";
import { setIsAdd } from "../../../../store/StoreAction";
import { FaPlus } from "react-icons/fa";
import Layout from "../../Layout";
import useQueryData from "../../../../functions/custom-hooks/useQueryData";
import { apiVersion } from "../../../../functions/functions-general";
import ButtonSpinner from "../../../../partials/spinners/ButtonSpinner";
import ModalAddUsers from "./ModalAddUsers";
import UsersList from "./UsersList";
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874

const Users = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

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

  const filterArrayActiveRoles = dataRoles?.data.filter(
    (item) => item.role_is_active == 1,
  );

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };
<<<<<<< HEAD
  return (
    <>
      <Layout menu="settings" submenu="users">
        {/* page header */}
        <div className="flex items-center w-full justify-between">
=======

  return (
    <>
      <Layout menu="settings" submenu="users">
        <div className="flex items-center justify-between w-full">
          {/* page header */}
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
          <h1>Users</h1>
          <div>
            {isLoading ? (
              <ButtonSpinner />
            ) : (
              <button
                type="button"
<<<<<<< HEAD
                className="flex items=center gap-1 hover:underline"
=======
                className="flex items-center gap-1 hover:underline"
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
                onClick={handleAdd}
              >
                <FaPlus className="text-primary" />
                Add
              </button>
            )}
          </div>
        </div>
        {/* page content */}
        <div>
          <UsersList itemEdit={itemEdit} setItemEdit={setItemEdit} />
        </div>
      </Layout>
<<<<<<< HEAD
=======

>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
      {store.isAdd && (
        <ModalAddUsers
          itemEdit={itemEdit}
          filterArrayActiveRoles={filterArrayActiveRoles}
<<<<<<< HEAD
        />
=======
        ></ModalAddUsers>
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
      )}
    </>
  );
};

export default Users;
