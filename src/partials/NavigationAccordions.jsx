import React from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

<<<<<<< HEAD
const NavigationAccordions = ({ item, subNavList = [] }) => {
=======
const NavigationAccordions = ({ subNavList = [], item }) => {
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <button
<<<<<<< HEAD
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-1 flex items-center gap-2 hover:bg-gray-50/10 w-full uppercase justify-between"
      >
        <div className=" flex items-center gap-2">
=======
        className="w-full px-4 py-1 hover:bg-gray-50/10 flex items-center justify-between gap-2 uppercase"
        onClick={() => setIsOpen(!isOpen)}
      >
        {" "}
        <div className="flex items-center gap-2">
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
          {item.icon} {item.label}
        </div>
        <FaChevronDown />
      </button>
      {isOpen && (
        <ul className="self-start w-full">
          {subNavList.map((item, key) => {
            return (
              <li key={key} className="w-full">
                <Link
                  to={item.path}
<<<<<<< HEAD
                  className="block w-full pl-10 hover:bg-gray-50/10"
=======
                  className=" block pl-10 w-full hover:bg-gray-50/10"
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default NavigationAccordions;
