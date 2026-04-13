import { devNavUrl, urlDeveloper } from "../functions/functions-general";
import Roles from "../pages/developer/settings/roles/roles";

export const routesDeveloper = [
    {
    path: `${devNavUrl}/${urlDeveloper}/`,
    element:  (
    <>
    <Roles />
    </>
    ),
    },
]