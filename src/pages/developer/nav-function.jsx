import { FaUsers } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

export const navlist = [
  {
    label: "Dashboard",
    icon: <MdDashboard />,
    menu: "dashboard",
    submenu: "",
  },
  {
    label: "Employees",
    icon: <FaUsers />,
    menu: "employees",
    submenu: "",
  },
  {
    label: "Settings",
    icon: <FaCogs />,
    menu: "settings",
    submenu: "",
    subNavList: [
        {
        label: "Role",
        path:`${devNavUrl}/${urlDeveloper}/settings/role`,
    },
        {
        label: "Users",
        path:`${devNavUrl}/${urlDeveloper}/settings/users`,
    },
],
  },
];
