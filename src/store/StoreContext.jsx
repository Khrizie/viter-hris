import React from "react";
import { StoreReducer } from "./StoreReducer";
const isMobileOrTablet = window.matchMedia("(max-width:1027px)").matches;

const initVal = {
  error: false,
  success: false,
  isShow: isMobileOrTablet ? false : true,
  isArchive: false,
  isDelete: false,
  isRestore: false,
  isAdd: false,
  isSearch: false,
  isCreatePassSuccess: false,
  isForgotPassSuccess: false,
  isLogin: false,
  isLogout: false,
  isAccountUpdated: false,
  isLeaveOpen: false,
  isRoomOpen: false,
  isSettingsOpen: false,
  isKpiOpen: false,
  isPayrollOpen: false,
  isMemoOpen: false,
  isViewImage: false,
  isViewTab: false,
  isViewTabModal: false,
  isViewTabModalLog: false,
  isNewFeature: [],
  scrollPosition: 0,
  credentials: {
    data: {
      role: "developer",
      role_code: "r_is_developer",
      user_first_name: "John",
<<<<<<< HEAD
      user_last_name: "Doe",
=======
      user_last_name: "John",
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
      user_email: "john@gmail.com",
    },
  },
  filterValues: [],
  isAddAccomplishment: { modal: false, code: "" },
};

const StoreContext = React.createContext();

const StoreProvider = (props) => {
  const [store, dispatch] = React.useReducer(StoreReducer, initVal);

  return (
    <StoreContext.Provider value={{ store, dispatch }}>
      {props.children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProvider };
