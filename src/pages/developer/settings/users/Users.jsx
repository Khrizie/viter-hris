import React from "react";
import { StoreContext } from "../../../../store/StoreContext";
import { setIsAdd } from "../../../../store/StoreAction";
import { FaPlus } from "react-icons/fa";
import Layout from "../../Layout";
import useQueryData from "../../../../functions/custom-hooks/useQueryData";
import { apiVersion } from "../../../../functions/functions-general";
import ButtonSpinner from "../../../../partials/spinners/ButtonSpinner";
import ModalAddUsers from "./ModalAddUsers";
import UsersList from "./UsersList";

const Users = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const {
    isLoading,
    isFetching,
    data: dataRoles,
  } = useQueryData(
    `${apiVersion}/controllers/developers/settings/roles/roles.php`, //api patch file
    "get", //method request (get, post,)
    "roles", //query key
  );

  const filterArrayActiveRoles = dataRoles?.data.filter(
    (item) => item.role_is_active == 1,
  );

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };

  return (
    <>
      <Layout menu="settings" submenu="users">
        <div className="flex items-center justify-between w-full">
          {/* page header */}
          <h1>Users</h1>
          <div>
            {isLoading ? (
              <ButtonSpinner />
            ) : (
              <button
                type="button"
                className="flex items-center gap-1 hover:underline"
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

      {store.isAdd && (
        <ModalAddUsers
          itemEdit={itemEdit}
          filterArrayActiveRoles={filterArrayActiveRoles}
        ></ModalAddUsers>
      )}
    </>
  );
};

export default Users;
