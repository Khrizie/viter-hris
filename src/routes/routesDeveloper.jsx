import { devNavUrl, urlDeveloper } from "../functions/functions-general";
import Roles from "../pages/developer/settings/roles/Roles";

export const routeDeveloper = [
  {
    path: `${devNavUrl}/${urlDeveloper}`,
    element: <></>,
  },
  {
    path: `${devNavUrl}/${urlDeveloper}/settings/roles`,
    element: (
      <>
        <Roles />
      </>
    ),
  },
];
