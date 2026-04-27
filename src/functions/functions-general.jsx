import React from "react";
export const urlPath = "http://localhost/react-vite/viter-hris";
export const devApiUrl = urlPath + "/rest";
export const devNavUrl = "";
export const apiVersion = "/v1";
export const setTimezone = "Asia/Manila";
<<<<<<< HEAD
// ROLES VARIABLE
export const urlDeveloper = "developer";

//dev API KEY
=======

export const urlDeveloper = "developer";

>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
export const devKey = "123devkey";

// format the numbers separated by comma
export const isEmptyItem = (item, x = "") => {
  let result = x;

  if (typeof item !== "undefined" && item !== "") {
    result = item;
  }
  return result;
};
<<<<<<< HEAD

=======
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
export const formatDate = (dateVal, val = "", format = "") => {
  const formatedDate = val;
  if (typeof dateVal !== "undefined" && dateVal !== "") {
    // formatting date
    const event = new Date(dateVal);

<<<<<<< HEAD
    return event.toLocaleString("en", dataOptions(format));
=======
    return event.toLocaleString("en", dateOptions(format));
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
  }
  return formatedDate;
};

<<<<<<< HEAD
export const dataOptions = (format = "") => {
=======
export const dateOptions = (format = "") => {
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
  let options = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  if (format == "short-date") {
    return {
      month: "short",
      day: "numeric",
      year: "numeric",
    };
  }
<<<<<<< HEAD
=======
  return options;
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
};

export const handleEscape = (handleClose) => {
  React.useEffect(() => {
    const handleEscape = (e) => {
      if (e.keyCode === 27) {
        handleClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  });
};
<<<<<<< HEAD

=======
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
// get focus on a button
export const GetFocus = (id) => {
  React.useEffect(() => {
    const obj = document.getElementById(id);
    obj.focus();
  }, []);
<<<<<<< HEAD
};
=======
};
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
