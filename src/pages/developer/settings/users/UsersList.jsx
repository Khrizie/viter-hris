import React from "react";
import useQueryData from "../../../../functions/custom-hooks/useQueryData";
import {
  apiVersion,
  formatDate,
} from "../../../../functions/functions-general";
import NoData from "../../../../partials/NoData";
import FetchingSpinner from "../../../../partials/spinners/FetchingSpinner";
import TableLoading from "../../../../partials/TableLoading";
<<<<<<< HEAD
import { FaArchive, FaEdit, FaTrash, FaTrashRestore } from "react-icons/fa";
import { StoreContext } from "../../../../store/StoreContext";
=======
import { StoreContext } from "../../../../store/StoreContext";
import Status from "../../../../partials/Status";
import { useInfiniteQuery } from "@tanstack/react-query";
import { queryDataInfinite } from "../../../../functions/custom-hooks/queryDataInfinite";
import { useInView } from "react-intersection-observer";
import SearchBar from "../../../../partials/SearchBar";
import ServerError from "../../../../partials/ServerError";
import { FaArchive, FaEdit, FaTrash, FaTrashRestore } from "react-icons/fa";
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
import {
  setIsAdd,
  setIsArchive,
  setIsDelete,
  setIsRestore,
} from "../../../../store/StoreAction";
<<<<<<< HEAD
import Status from "../../../../partials/Status";
import ModalArchive from "../../../../partials/modals/ModalArchive";
import ModalRestore from "../../../../partials/modals/ModalRestore";
import ModalDelete from "../../../../partials/modals/ModalDelete";
import { useInfiniteQuery } from "@tanstack/react-query";
import { queryDataInfinite } from "../../../../functions/custom-hooks/queryDataInfinite";
import { useInView } from "react-intersection-observer";
import ServerError from "../../../../partials/ServerError";
import Loadmore from "../../../../partials/Loadmore";
import SearchBar from "../../../../partials/SearchBar";

const UsersList = ({ setItemEdit, itemEdit }) => {
=======
import ModalArchive from "../../../../partials/modals/ModalArchive";
import ModalRestore from "../../../../partials/modals/ModalRestore";
import ModalDelete from "../../../../partials/modals/ModalDelete";

const UsersList = ({ itemEdit, setItemEdit }) => {
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
  const { store, dispatch } = React.useContext(StoreContext);
  // page
  const [page, setPage] = React.useState(1);
  const [filterData, setFilterData] = React.useState("");
  const [onSearch, setOnSearch] = React.useState(false);
  const search = React.useRef({ value: "" });
  const { ref, inView } = useInView();
  let counter = 1;

<<<<<<< HEAD
  //use if with loadmore button and search bar
=======
  const handleEdit = (item) => {
    dispatch(setIsAdd(true));
    setItemEdit(item);
  };
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
    queryKey: ["users", search.current.value, store.isSearch, filterData],
    queryFn: async ({ pageParam = 1 }) =>
      await queryDataInfinite(
        ``, // search endpoint
        `${apiVersion}/controllers/developers/settings/users/page.php?start=${pageParam}`, // list endpoint
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

<<<<<<< HEAD
    const handleEdit = (item) => {
      dispatch(setIsAdd(true));
      setItemEdit(item);
    };
  
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
      <div className="py-5 flex items-center justify-between">
        <div className="relative">
          <label htmlFor="">Status</label>
          <select
            name="satus"
            id=""
            value={filterData}
            onChange={(e) => setFilterData(e.target.value)}
          >
            <option value="">All</option>
            <option value="1">Active</option>
            <option value="0">Inactive</option>
=======
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="relative">
          <label htmlFor="">Status</label>
          <select
            onChange={(e) => setFilterData(e.target.value)}
            value={filterData}
          >
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

      <div className="relative">
        {status !== "pending" && isFetching && <FetchingSpinner />}
=======
      <div className="relative pt-4 rounded-md">
        {isFetching && <FetchingSpinner />}
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
        <table>
          <thead>
            <tr>
              <th>#</th>
<<<<<<< HEAD
              <th>Status</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Created</th>
              <th>Updated</th>
            </tr>
          </thead>
          <tbody>
            {/* loading screen */}
=======
              <th>status</th>
              <th>FirstName</th>
              <th>LastName</th>
              <th>Email</th>
              <th>Role ID</th>
              <th>Date Created</th>
              <th>Date Update</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
            {!error &&
              (status == "pending" || result?.pages[0]?.count == 0) && (
                <tr>
                  <td colSpan="100%" className="p-10">
                    {status == "pending" ? (
                      <TableLoading cols={2} count={20} />
                    ) : (
                      <NoData />
                    )}
                  </td>
                </tr>
              )}
<<<<<<< HEAD
            {/* if request api failed */}
=======
            {result?.pages?.map((page, key) => (
              <React.Fragment key={key}>
                {page?.data?.map((item, key) => {
                  return (
                    <tr key={key}>
                      <td>{counter++}</td>
                      <td>
                        <Status
                          text={`${
                            item.users_is_active == 1 ? "active" : "inactive"
                          }`}
                        />
                      </td>
                      <td>{item.users_first_name}</td>
                      <td>{item.users_last_name}</td>
                      <td>{item.users_email}</td>
                      <td>{item.users_role_id}</td>
                      <td>
                        {formatDate(item.users_created, "--", "short-date")}
                      </td>
                      <td>
                        {formatDate(item.users_updated, "--", "short-date")}
                      </td>
                      <td>
                        <div className="flex items-center gap-3">
                          {item.users_is_active == 1 ? (
                            <>
                              <button
                                type="button"
                                className="tooltip-action-table"
                                data-tooltip="edit"
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
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
            {error && (
              <tr>
                <td colSpan="100%" className="p-10">
                  <ServerError />
                </td>
              </tr>
            )}
<<<<<<< HEAD
            {/* if request api sucess and data exist then show */}
            {result?.pages.map((pages, key) => (
              <React.Fragment key={key}>
                {pages?.data.map((item, key) => {
                  return (
                    <tr key={key}>
                      <td>{counter++}</td>
                      <td>
                        <Status
                          text={
                            item.users_is_active == 1 ? "active" : "inactive"
                          }
                        />
                      </td>
                      <td>
                        {item.users_first_name} {item.users_last_name}
                      </td>
                      <td>{item.users_email}</td>
                      <td>{item.role_name}</td>
                      <td>{formatDate(item.users_created)}</td>
                      <td>{formatDate(item.users_updated)}</td>
                        <td>
                          <div className="flex items-center gap-3">
                            {item.users_is_active == 1 ? (
                              <>
                                {/* edit */}
                                <button
                                  type="button"
                                  className="tooltip-action-table"
                                  data-tooltip="Edit"
                                  onClick={() => handleEdit(item)}
                                >
                                  <FaEdit />
                                </button>
                                {/* archive */}
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
            isSearchOrFilter={store.isSearch || store?.isFilter}
          />
        </div>
=======
          </tbody>
        </table>
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
      </div>

      {store.isArchive && (
        <ModalArchive
<<<<<<< HEAD
          mysqlApiArchive={`${apiVersion}/controllers/developers/settings/users/active.php?id=${itemEdit.users_aid}`}
          msg="Are you sure you want to archive this record?"
          successMsg="sucessfully archived."
          item={{ name: `${itemEdit.users_first_name} ${itemEdit.users_last_name}` }}
=======
          mysqlApiArchive={`${apiVersion}/controllers/developers/users/active.php?id=${itemEdit.users_aid}`}
          msg="Are you sure you want to archive this record?"
          successMsg="Successfully archived."
          item={itemEdit.users_first_name}
          item={itemEdit.users_last_name}
          item={itemEdit.users_email}
          item={itemEdit.users_role_id}
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
          dataItem={itemEdit}
          queryKey="users"
        />
      )}
<<<<<<< HEAD
      {store.isRestore && (
        <ModalRestore
          mysqlApiRestore={`${apiVersion}/controllers/developers/settings/users/active.php?id=${itemEdit.users_aid}`}
          msg="Are you sure you want to restore this record?"
          successMsg="sucessfully restore."
          item={{ name: `${itemEdit.users_first_name} ${itemEdit.users_last_name}` }}
=======

      {store.isRestore && (
        <ModalRestore
          mysqlApiRestore={`${apiVersion}/controllers/developers/users/active.php?id=${itemEdit.users_aid}`}
          msg="Are you sure you want to restore this record?"
          successMsg="Successfully restore."
          item={itemEdit.users_first_name}
          item={itemEdit.users_last_name}
          item={itemEdit.users_email}
          item={itemEdit.users_role_id}
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
          dataItem={itemEdit}
          queryKey="users"
        />
      )}
      {store.isDelete && (
        <ModalDelete
<<<<<<< HEAD
          mysqlApiDelete={`${apiVersion}/controllers/developers/settings/users/delete.php?id=${itemEdit.users_aid}`}
          msg="Are you sure you want to delete this record?"
          successMsg="sucessfully deleted."
          item={{ name: `${itemEdit.users_first_name} ${itemEdit.users_last_name}` }}
=======
          mysqlApiDelete={`${apiVersion}/controllers/developers/users/users.php?id=${itemEdit.users_aid}`}
          msg="Are you sure you want to delete this record?"
          successMsg="Successfully deleted."
          item={itemEdit.users_first_name}
          item={itemEdit.users_last_name}
          item={itemEdit.users_email}
          item={itemEdit.users_role_id}
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
          dataItem={itemEdit}
          queryKey="users"
        />
      )}
    </>
  );
};
<<<<<<< HEAD

=======
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
export default UsersList;
