import React from "react";
import Layout from "../Layout";
import { FaPlus } from "react-icons/fa";
import { StoreContext } from "../../../store/StoreContext";
import { setIsAdd } from "../../../store/StoreAction";
<<<<<<< HEAD
import EmployeesList from "./EmployeesList";
import EmployeesAdd from "./ModalAddEmployees";
=======
import ModalAddEmployees from "./ModalAddEmployees";
import EmployeesList from "./EmployeesList";
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874

const Employees = () => {
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
      <Layout menu="employees">
<<<<<<< HEAD
        {/* page header */}
        <div className="flex items-center w-full justify-between">
=======
        <div className="flex items-center justify-between w-full">
          {/* page header */}
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
          <h1>Employees</h1>
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
          <EmployeesList itemEdit={itemEdit} setItemEdit={setItemEdit} />
        </div>
      </Layout>
<<<<<<< HEAD
      {store.isAdd && <EmployeesAdd itemEdit={itemEdit} />}
=======

      {store.isAdd && (
        <ModalAddEmployees itemEdit={itemEdit}></ModalAddEmployees>
      )}
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
    </>
  );
};

export default Employees;
