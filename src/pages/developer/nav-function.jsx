<<<<<<< HEAD
import { FaCogs, FaUsers, FaFileAlt } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";
import { devNavUrl, urlDeveloper } from "../../functions/functions-general";
=======
import { MdDashboard } from "react-icons/md";
import { devNavUrl, urlDeveloper } from "../../functions/functions-general";
import { FaCogs, FaUser } from "react-icons/fa";
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874

export const navList = [
  {
    label: "Dashboard",
    icon: <MdDashboard />,
    menu: "dashboard",
    path: `${devNavUrl}/${urlDeveloper}/dashboard`,
    submenu: "",
  },
  {
    label: "Employees",
<<<<<<< HEAD
    icon: <FaUsers />,
=======
    icon: <FaUser />,
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
    menu: "employees",
    path: `${devNavUrl}/${urlDeveloper}/employees`,
    submenu: "",
  },
  {
<<<<<<< HEAD
    label: "Memo",
    icon: <FaFileAlt />,
    menu: "memo",
    path: `${devNavUrl}/${urlDeveloper}/memo`,
    submenu: "",
  },
  {
=======
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
    label: "Settings",
    icon: <FaCogs />,
    menu: "settings",
    submenu: "",
    subNavList: [
      {
        label: "Role",
        path: `${devNavUrl}/${urlDeveloper}/settings/role`,
      },
      {
        label: "users",
        path: `${devNavUrl}/${urlDeveloper}/settings/users`,
      },
<<<<<<< HEAD
      {
        label: "Department",
        path: `${devNavUrl}/${urlDeveloper}/settings/department`,
      },
      {
        label: "Notification",
        path: `${devNavUrl}/${urlDeveloper}/settings/notification`,
      },
=======
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
    ],
  },
];
