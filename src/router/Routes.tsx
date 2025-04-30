import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import QuizCreator from "../pages/QuizCreator";
import { Dashboard } from "../page/Dashboard";
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
      path: "/quiz/creator",
      element: <QuizCreator />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
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
