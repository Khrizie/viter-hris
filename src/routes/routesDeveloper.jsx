import { devNavUrl, urlDeveloper } from "../functions/functions-general";
import Dashboard from "../pages/developer/dashboard/Dashboard";
import Employees from "../pages/developer/employees/Employees";
import Roles from "../pages/developer/settings/roles/Roles";
import Users from "../pages/developer/settings/users/Users";
<<<<<<< HEAD
import Memo from "../pages/developer/memo/Memo";
import Department from "../pages/developer/settings/department/Department";
import Notification from "../pages/developer/settings/notification/Notification";
export const routesDeveloper = [
=======

export const routeDeveloper = [
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
  {
    path: `${devNavUrl}/${urlDeveloper}`,
    element: (
      <>
        <Dashboard />
      </>
    ),
  },
  {
<<<<<<< HEAD
    path: `${devNavUrl}/${urlDeveloper}/dashboard`,
=======
    path: `${devNavUrl}/${urlDeveloper}/Dashboard`,
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
    element: (
      <>
        <Dashboard />
      </>
    ),
  },
  {
    path: `${devNavUrl}/${urlDeveloper}/employees`,
    element: (
      <>
        <Employees />
      </>
    ),
  },
  {
    path: `${devNavUrl}/${urlDeveloper}/settings/role`,
    element: (
      <>
        <Roles />
      </>
    ),
  },
  {
    path: `${devNavUrl}/${urlDeveloper}/settings/users`,
    element: (
      <>
        <Users />
      </>
    ),
  },
<<<<<<< HEAD
  {
    path: `${devNavUrl}/${urlDeveloper}/settings/department`,
    element: (
      <>
        <Department />
      </>
    ),
  },
  {
    path: `${devNavUrl}/${urlDeveloper}/settings/notification`,
    element: (
      <>
        <Notification />
      </>
    ),
  },
  {
    path: `${devNavUrl}/${urlDeveloper}/memo`,
    element: (
      <>
        <Memo />
      </>
    ),
  },
=======
>>>>>>> c2339cb80d773abbf43885e5bcd0378d71c11874
];
