import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import { Dashboard } from "../page/Dashboard";
const Routes = () =>{
    // const routerForPublic =[
        
    // ];
    // const routerForAuthenticatedOnly=[

    // ];
    const routesForNotAuthenticatedOnly=[
        {
            path: "/",
            element:<App/>
        },
        {
            path: "/dashboard",
            element: <Dashboard/>
        }
    ]
    const router = createBrowserRouter([
        ...routesForNotAuthenticatedOnly
    ])
    return <RouterProvider router={router}/>
}

export default Routes;