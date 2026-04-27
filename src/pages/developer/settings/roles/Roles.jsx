import React from "react";
<<<<<<< HEAD
import Layout from "../../Layout";
import RolesList from "./RolesList";
import { setIsAdd } from "../../../../store/StoreAction";
import { StoreContext } from "../../../../store/StoreContext";
import { FaPlus } from "react-icons/fa";
import ModalAddRoles from "./ModalAddRoles";
=======
import RolesList from "./RolesList";
import { StoreContext } from "../../../../store/StoreContext";
import { setIsAdd } from "../../../../store/StoreAction";
import { FaPlus } from "react-icons/fa";
import ModalAddRoles from "./ModalAddRoles";
import Layout from "../../Layout";
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874

const Roles = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);
<<<<<<< HEAD
=======

>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };
<<<<<<< HEAD
  return (
    <>
      <Layout menu="settings" submenu="roles">
        {/* page header */}
        <div className="flex items-center w-full justify-between">
=======

  return (
    <>
      <Layout menu="settings" submenu="roles">
        <div className="flex items-center justify-between w-full">
          {/* page header */}
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
          <h1>Roles</h1>
          <div>
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
          </div>
        </div>
        {/* page content */}
        <div>
          <RolesList itemEdit={itemEdit} setItemEdit={setItemEdit} />
        </div>
      </Layout>
<<<<<<< HEAD
      {store.isAdd && <ModalAddRoles itemEdit={itemEdit} />}
=======

      {store.isAdd && <ModalAddRoles itemEdit={itemEdit}></ModalAddRoles>}
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
    </>
  );
};

export default Roles;
