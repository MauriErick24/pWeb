import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import QuizCreator  from "../pages/QuizCreator";
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
            path: "/quiz/creator",
            element:<QuizCreator/>
        }
    ]
    const router = createBrowserRouter([
        ...routesForNotAuthenticatedOnly
    ])
    return <RouterProvider router={router}/>
}

export default Routes;