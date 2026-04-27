import React from "react";
import { StoreContext } from "../store/StoreContext";
import { Link } from "react-router-dom";
import { devNavUrl } from "../functions/functions-general";
import { FaChevronDown } from "react-icons/fa";
import NavigationAccordions from "./NavigationAccordions";

const Navigation = ({ navigationList = [], menu = "", submenu = "" }) => {
  const { store, dispatch } = React.useContext(StoreContext);
<<<<<<< HEAD
  const link = "/developer";
  const scrollRef = React.useRef(null);
  const handleShowNavigation = () => {};
  const handleScroll = () => {};
  const isMobileOrTablet = window.matchMedia("(max-width:1027px)").matches;
=======
  const isMobileOrTablet = window.matchMedia("(max-width:1027px)").matches;
  const scrollRef = React.useRef(null);

  const link = "/developer";
  const handleShowNavigation = () => {};
  const handleScroll = () => {};
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874

  return (
    <>
      <div className="print:hidden">
        <nav
          className={`${
            store.isShow ? "translate-x-0" : ""
<<<<<<< HEAD
          }  h-dvh duration-200 ease-in fixed z-40
            "h-[calc(100%-30px)]" : "h-full"
          } overflow-y-auto w-[14rem] print:hidden py-3 uppercase pt-[76px]`}
=======
          } h-dvh duration-200 ease-in fixed z-40  overflow-y-auto w-[14rem] print:hidden py-3 uppercase pt-[76px]`}
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
          ref={scrollRef}
          onScroll={(e) => handleScroll(e)}
        >
          <div className="text-sm text-white flex flex-col justify-between h-full">
            <ul>
<<<<<<< HEAD
              {navigationList.map((item, key) => {
                return (
                  <li
                    key={key}
                    className={`h-fit flex items-center gap-2 ${item.subNavList && "flex-col gap-0.5!"}`}
=======
              {navigationList?.map((item, key) => {
                console.log(item);
                return (
                  <li
                    key={key}
                    className={`w-full h-fit flex items-center gap-2 ${item.subNavList && "flex-col gap-0.5!"}`}
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
                  >
                    {item.subNavList ? (
                      <NavigationAccordions
                        subNavList={item.subNavList}
                        item={item}
                      />
                    ) : (
                      <Link
<<<<<<< HEAD
                        className="px-4 py-1 hover:bg-gray-50/10 w-full"
                        to={item.path}
                      >
                        <div className="flex items-center gap-2 ">
=======
                        to={item.path}
                        className="w-full px-4 py-1 hover:bg-gray-50/10"
                      >
                        <div className="flex items-center gap-2">
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
                          {item.icon} {item.label}
                        </div>
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
        {/* <span
          className={`${
<<<<<<< HEAD
            store.isShow ? "" : "-translate-x-full"
=======
            !store.isShow ? "" : "-translate-x-full"
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
          } fixed z-30 w-screen h-screen bg-dark/50 ${
            isMobileOrTablet ? "" : "lg:hidden"
          }`}
          onClick={handleShowNavigation}
          onTouchMove={handleShowNavigation}
        ></span> */}
      </div>
    </>
  );
};

export default Navigation;
