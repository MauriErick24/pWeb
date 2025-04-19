import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { App } from "../App";
const Routes = () =>{
    // const routerForPublic =[
        
    // ];
    // const routerForAuthenticatedOnly=[

    // ];
    const routesForNotAuthenticatedOnly=[
        {
            path: "/",
            element:<App/>
        }
    ]
    const router = createBrowserRouter([
        ...routesForNotAuthenticatedOnly
    ])
    return <RouterProvider router={router}/>
}

export default Routes;