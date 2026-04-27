import React from "react";
import { StoreContext } from "../../../store/StoreContext";
import { useInfiniteQuery } from "@tanstack/react-query";
<<<<<<< HEAD
import { queryDataInfinite } from "../../../functions/custom-hooks/queryDataInfinite";
import { apiVersion } from "../../../functions/functions-general";
import { useInView } from "react-intersection-observer";
import NoData from "../../../partials/NoData";
import ServerError from "../../../partials/ServerError";
import TableLoading from "../../../partials/TableLoading";
import FetchingSpinner from "../../../partials/spinners/FetchingSpinner";
import Loadmore from "../../../partials/Loadmore";
import Status from "../../../partials/Status";
import SearchBar from "../../../partials/SearchBar";

import { FaArchive, FaEdit, FaTrash, FaTrashRestore } from "react-icons/fa";
=======
import { apiVersion, formatDate } from "../../../functions/functions-general";
import { useInView } from "react-intersection-observer";
import ServerError from "../../../partials/ServerError";
import { queryDataInfinite } from "../../../functions/custom-hooks/queryDataInfinite";
import Loadmore from "../../../partials/Loadmore";
import Status from "../../../partials/Status";
import { FaArchive, FaEdit, FaTrash, FaTrashRestore } from "react-icons/fa";
import FetchingSpinner from "../../../partials/spinners/FetchingSpinner";
import TableLoading from "../../../partials/TableLoading";
import NoData from "../../../partials/NoData";
import SearchBar from "../../../partials/SearchBar";
import ModalArchive from "../../../partials/modals/ModalArchive";
import ModalRestore from "../../../partials/modals/ModalRestore";
import ModalDelete from "../../../partials/modals/ModalDelete";
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
import {
  setIsAdd,
  setIsArchive,
  setIsDelete,
  setIsRestore,
} from "../../../store/StoreAction";
<<<<<<< HEAD
import ModalArchive from "../../../partials/modals/ModalArchive";
import ModalRestore from "../../../partials/modals/ModalRestore";
import ModalDelete from "../../../partials/modals/ModalDelete";
=======
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874

const EmployeesList = ({ itemEdit, setItemEdit }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  // page
  const [page, setPage] = React.useState(1);
  const [filterData, setFilterData] = React.useState("");
  const [onSearch, setOnSearch] = React.useState(false);
  const search = React.useRef({ value: "" });
  const { ref, inView } = useInView();
  let counter = 1;

  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item);
  };
  const handleArchive = (item) => {
<<<<<<< HEAD
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

  //use if with loadmore button and search bar
=======
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
  //   use if with loadmore button and search bar
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
  const {
    data: result,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
<<<<<<< HEAD
    queryKey: ["employees", search.current.value, store.isSearch, filterData],
=======
    queryKey: ["employee", search.current.value, store.isSearch, filterData],
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
    queryFn: async ({ pageParam = 1 }) =>
      await queryDataInfinite(
        ``, // search endpoint
        `${apiVersion}/controllers/developers/employees/page.php?start=${pageParam}`, // list endpoint
<<<<<<< HEAD
        // store.isSearch || isFilter, // search boolean, // search boolean
=======
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
        false,
        {
          filterData,
          searchValue: search?.current?.value,
        },
<<<<<<< HEAD
        `post`,
=======
        "post",
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
      ),
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total) {
        return lastPage.page + lastPage.count;
      }
      return;
    },
    refetchOnWindowFocus: false,
  });
<<<<<<< HEAD
=======

>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
  React.useEffect(() => {
    if (inView) {
      setPage((prev) => prev + 1);
      fetchNextPage();
    }
  }, [inView]);
  return (
    <>
<<<<<<< HEAD
      <div className="flex items-enter justify-between py-5">
=======
      <div className="flex items-center justify-between">
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
        <div className="relative">
          <label htmlFor="">Status</label>
          <select
            onChange={(e) => setFilterData(e.target.value)}
            value={filterData}
          >
<<<<<<< HEAD
            <option value="">All</option>
            <option value="1">Active</option>
            <option value="0">Inactive</option>
=======
            <option value=""> All </option>
            <option value="1"> Active </option>
            <option value="0"> Inactive </option>
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
          </select>
        </div>
        <SearchBar
          search={search}
          dispatch={dispatch}
          store={store}
          result={result?.pages}
          isFetching={isFetching}
          setOnSearch={setOnSearch}
          onSearch={onSearch}
        />
      </div>
<<<<<<< HEAD

      <div className="relative pt-4 rounded-md">
        {status !== "pending" && isFetching && <FetchingSpinner />}
=======
      <div className="relative pt-4 rounded-md">
        {isFetching && <FetchingSpinner />}
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Status</th>
<<<<<<< HEAD
              <th>Employee Name</th>
              <th>Email</th>
=======
              <th>FirstName</th>
              <th>MiddleName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Created</th>
              <th>Date Update</th>
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
              <th></th>
            </tr>
          </thead>
          <tbody>
<<<<<<< HEAD
            {/* loading screen for data */}
            {!error &&
              (status == "pending" || result?.pages[0]?.count == 0) && (
                <tr>
                  <td colSpan="100%" className="=p-10">
=======
            {!error &&
              (status == "pending" || result?.pages[0]?.count == 0) && (
                <tr>
                  <td colSpan="100%" className="p-10">
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
                    {status == "pending" ? (
                      <TableLoading cols={2} count={20} />
                    ) : (
                      <NoData />
                    )}
                  </td>
                </tr>
              )}
<<<<<<< HEAD
            {/* if request is failed the show error message */}
            {error && (
              <tr>
                <td colSpan="100%" className="=p-10">
                  <ServerError />
                </td>
              </tr>
            )}
=======
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
            {result?.pages?.map((page, key) => (
              <React.Fragment key={key}>
                {page?.data?.map((item, key) => {
                  return (
                    <tr key={key}>
                      <td>{counter++}</td>
                      <td>
                        <Status
<<<<<<< HEAD
                          text={`${item.employee_is_active == 1 ? "active" : "inactive"}`}
                        />
                      </td>
                      <td>
                        {item.employee_first_name} {item.employee_last_name}
                      </td>
                      <td>{item.employee_email}</td>
                      <td>
=======
                          text={`${
                            item.employee_is_active == 1 ? "active" : "inactive"
                          }`}
                        />
                      </td>
                      <td>{item.employee_first_name}</td>
                      <td>{item.employee_middle_name}</td>
                      <td>{item.employee_last_name}</td>
                      <td>{item.employee_email}</td>
                      <td>
                        {formatDate(item.employee_created, "--", "short-date")}
                      </td>
                      <td>
                        {formatDate(item.employee_updated, "--", "short-date")}
                      </td>
                      <td>
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
                        <div className="flex items-center gap-3">
                          {item.employee_is_active == 1 ? (
                            <>
                              <button
                                type="button"
                                className="tooltip-action-table"
<<<<<<< HEAD
                                data-tooltip="Edit"
=======
                                data-tooltip="edit"
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
                                onClick={() => handleEdit(item)}
                              >
                                <FaEdit />
                              </button>
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
                })}
              </React.Fragment>
            ))}
<<<<<<< HEAD
          </tbody>
        </table>
        <div className="loadmore flex justify-center flex-col items-center pb-10">
          <Loadmore
            fetchNextPage={fetchNextPage}
            isFetchingNextPage={isFetchingNextPage}
            hasNextPage={hasNextPage}
            result={result?.pages[0]}
            setPage={setPage}
            page={page}
            refView={ref}
            isSearchOrFilter={store.isSearch || result?.isFilter}
          />
        </div>
=======
            {error && (
              <tr>
                <td colSpan="100%" className="p-10">
                  <ServerError />
                </td>
              </tr>
            )}
          </tbody>
        </table>
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
      </div>

      {store.isArchive && (
        <ModalArchive
          mysqlApiArchive={`${apiVersion}/controllers/developers/employees/active.php?id=${itemEdit.employee_aid}`}
          msg="Are you sure you want to archive this record?"
<<<<<<< HEAD
          successMsg="sucessfully archived."
          item={`${itemEdit.employee_first_name} ${itemEdit.employee_last_name}`}
=======
          successMsg="Successfully archived."
          item={itemEdit.employee_first_name}
          item={itemEdit.employee_middle_name}
          item={itemEdit.employee_last_name}
          item={itemEdit.employee_email}
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
          dataItem={itemEdit}
          queryKey="employees"
        />
      )}
<<<<<<< HEAD
=======

>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
      {store.isRestore && (
        <ModalRestore
          mysqlApiRestore={`${apiVersion}/controllers/developers/employees/active.php?id=${itemEdit.employee_aid}`}
          msg="Are you sure you want to restore this record?"
<<<<<<< HEAD
          successMsg="sucessfully restore."
          item={`${itemEdit.employee_first_name} ${itemEdit.employee_last_name}`}
=======
          successMsg="Successfully restore."
          item={itemEdit.employee_first_name}
          item={itemEdit.employee_middle_name}
          item={itemEdit.employee_last_name}
          item={itemEdit.employee_email}
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
          dataItem={itemEdit}
          queryKey="employees"
        />
      )}
      {store.isDelete && (
        <ModalDelete
          mysqlApiDelete={`${apiVersion}/controllers/developers/employees/employees.php?id=${itemEdit.employee_aid}`}
          msg="Are you sure you want to delete this record?"
<<<<<<< HEAD
          successMsg="sucessfully deleted."
          item={`${itemEdit.employee_first_name} ${itemEdit.employee_last_name}`}
=======
          successMsg="Successfully deleted."
          item={itemEdit.employee_first_name}
          item={itemEdit.employee_middle_name}
          item={itemEdit.employee_last_name}
          item={itemEdit.employee_email}
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
          dataItem={itemEdit}
          queryKey="employees"
        />
      )}
    </>
  );
};

export default EmployeesList;
