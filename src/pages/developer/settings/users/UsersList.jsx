import React from "react";
import useQueryData from "../../../../functions/custom-hooks/useQueryData";
import {
  apiVersion,
  formatDate,
} from "../../../../functions/functions-general";
import NoData from "../../../../partials/NoData";
import FetchingSpinner from "../../../../partials/spinners/FetchingSpinner";
import TableLoading from "../../../../partials/TableLoading";
import { StoreContext } from "../../../../store/StoreContext";
import Status from "../../../../partials/Status";
import { useInfiniteQuery } from "@tanstack/react-query";
import { queryDataInfinite } from "../../../../functions/custom-hooks/queryDataInfinite";
import { useInView } from "react-intersection-observer";
import SearchBar from "../../../../partials/SearchBar";
import ServerError from "../../../../partials/ServerError";
import { FaArchive, FaEdit, FaTrash, FaTrashRestore } from "react-icons/fa";
import {
  setIsAdd,
  setIsArchive,
  setIsDelete,
  setIsRestore,
} from "../../../../store/StoreAction";
import ModalArchive from "../../../../partials/modals/ModalArchive";
import ModalRestore from "../../../../partials/modals/ModalRestore";
import ModalDelete from "../../../../partials/modals/ModalDelete";

const UsersList = ({ itemEdit, setItemEdit }) => {
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
        false,
        {
          filterData,
          searchValue: search?.current?.value,
        },
        "post",
      ),
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total) {
        return lastPage.page + lastPage.count;
      }
      return;
    },
    refetchOnWindowFocus: false,
  });

  React.useEffect(() => {
    if (inView) {
      setPage((prev) => prev + 1);
      fetchNextPage();
    }
  }, [inView]);

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
      <div className="relative pt-4 rounded-md">
        {isFetching && <FetchingSpinner />}
        <table>
          <thead>
            <tr>
              <th>#</th>
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
            {error && (
              <tr>
                <td colSpan="100%" className="p-10">
                  <ServerError />
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {store.isArchive && (
        <ModalArchive
          mysqlApiArchive={`${apiVersion}/controllers/developers/users/active.php?id=${itemEdit.users_aid}`}
          msg="Are you sure you want to archive this record?"
          successMsg="Successfully archived."
          item={itemEdit.users_first_name}
          item={itemEdit.users_last_name}
          item={itemEdit.users_email}
          item={itemEdit.users_role_id}
          dataItem={itemEdit}
          queryKey="users"
        />
      )}

      {store.isRestore && (
        <ModalRestore
          mysqlApiRestore={`${apiVersion}/controllers/developers/users/active.php?id=${itemEdit.users_aid}`}
          msg="Are you sure you want to restore this record?"
          successMsg="Successfully restore."
          item={itemEdit.users_first_name}
          item={itemEdit.users_last_name}
          item={itemEdit.users_email}
          item={itemEdit.users_role_id}
          dataItem={itemEdit}
          queryKey="users"
        />
      )}
      {store.isDelete && (
        <ModalDelete
          mysqlApiDelete={`${apiVersion}/controllers/developers/users/users.php?id=${itemEdit.users_aid}`}
          msg="Are you sure you want to delete this record?"
          successMsg="Successfully deleted."
          item={itemEdit.users_first_name}
          item={itemEdit.users_last_name}
          item={itemEdit.users_email}
          item={itemEdit.users_role_id}
          dataItem={itemEdit}
          queryKey="users"
        />
      )}
    </>
  );
};
export default UsersList;
