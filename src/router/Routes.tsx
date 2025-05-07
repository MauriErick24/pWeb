import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import QuizCreator from "../page/QuizCreator";
import { Cuestionario } from "../page/Cuestionario";

const Routes = () => {
  // const routerForPublic =[

  // ];
  // const routerForAuthenticatedOnly=[

  // ];
  const routesForNotAuthenticatedOnly = [
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/dashboard",
      element: <QuizCreator />,
    },
    {
      path: "/cuestionario",
      element: <Cuestionario />,
    },
  ];
  const router = createBrowserRouter([...routesForNotAuthenticatedOnly]);
  return <RouterProvider router={router} />;
};

export default Routes;
