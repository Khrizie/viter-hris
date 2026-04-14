import React from "react";
import Layout from "../../layout";
import RolesList from "./RolesList";
import { StoreContext } from "../../../../store/StoreContext";
import { setIsAdd } from "../../../../store/StoreAction";
import { FaPlus } from "react-icons/fa";
import ModalAddRoles from "./ModalAddRoles";

const Roles = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);

  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };
  return (
    <>
      <Layout menu="settings" submenu="roles">
        <div className="flex items-center justify-between w-full">
          {/* page header */}
          <h1>Roles</h1>
          <div>
            <button
              type="button"
              className="flex items-center gap-1 hover:underline"
              onClick={handleAdd}
            >
              <FaPlus className="text-primary" />
              add
            </button>
          </div>
        </div>
        {/* page content */}
        <div>
          <RolesList />
        </div>
      </Layout>

      {store.isAdd && <ModalAddRoles itemEdit={itemEdit}></ModalAddRoles>}
    </>
  );
};

export default Roles;
