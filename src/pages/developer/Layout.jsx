import React from "react";
<<<<<<< HEAD
import Header from "../../partials/Header";
import Navigation from "../../partials/Navigation";
import { navList } from "./nav-function";
import ModalSuccess from "../../partials/modals/ModalSuccess";
import { StoreContext } from "../../store/StoreContext";

const Layout = ({ children, menu = "", submenu = "" }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  return (
    <>
      {/* HEADER */}
      <Header />
      {/* NAVIGATION */}
      <Navigation menu={menu} submenu={submenu} navigationList={navList} />
      {/* BODY */}
      <div className="wrapper"> {children}</div>

      {/* FOOTER */}
=======
import { navList } from "./nav-function";
import Header from "../../partials/Header";
import Navigation from "../../partials/Navigation";
import ModalSuccess from "../../partials/modals/ModalSuccess";
import { StoreContext } from "../../store/StoreContext";

const Layout = ({ children, menu, submenu = "" }) => {
  const { store, dispatch } = React.useContext(StoreContext);
  return (
    <>
      {/*HEADER*/}
      <Header />

      {/*NAVIGATION*/}
      <Navigation menu={menu} submenu={submenu} navigationList={navList} />

      {/*BODY*/}
      <div className="wrapper">{children}</div>

      {/*FOOTER*/}

      {/* MODAL SUCCESS */}
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
      {store.success && <ModalSuccess />}
    </>
  );
};
<<<<<<< HEAD

=======
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
export default Layout;
