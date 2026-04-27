import React from "react";
import { StoreContext } from "../../../store/StoreContext";
import { setIsAdd } from "../../../store/StoreAction";
import Layout from "../Layout";
import { FaPlus } from "react-icons/fa";

const Dashboard = () => {
  const { store, dispatch } = React.useContext(StoreContext);
  const [itemEdit, setItemEdit] = React.useState(null);
<<<<<<< HEAD
=======

>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
  const handleAdd = () => {
    dispatch(setIsAdd(true));
    setItemEdit(null);
  };
  return (
    <>
<<<<<<< HEAD
      <Layout menu="employees">
        {/* page header */}
        <div className="flex items-center w-full justify-between">
=======
      <Layout menu="Dashboard">
        <div className="flex items-center justify-between w-full">
          {/* page header */}
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
          <h1>Dashboard</h1>
          <div>
            <button
              type="button"
<<<<<<< HEAD
              className="flex items=center gap-1 hover:underline"
              onClick={handleAdd}
            >
              <FaPlus className="text-primary" />
              Add
=======
              className="flex items-center gap-1 hover:underline"
              //   onClick={handleAdd}
            >
              <FaPlus className="text-primary" />
              add
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
            </button>
          </div>
        </div>
        {/* page content */}
        <div>
          {/* <RolesList itemEdit={itemEdit} setItemEdit={setItemEdit} /> */}
        </div>
      </Layout>
<<<<<<< HEAD
      {/* {store.isAdd && <ModalAddRoles itemEdit={itemEdit} />} */}
=======

      {/* {store.isAdd && <ModalAddRoles itemEdit={itemEdit}></ModalAddRoles>} */}
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
    </>
  );
};

export default Dashboard;
