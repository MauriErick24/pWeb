import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import QuizCreator from "../page/QuizCreator";
import { Cuestionario } from "../page/Cuestionario";
import Question from "../page/Question";
import { Dashboard } from "../page/Dashboard";

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
      element: <Dashboard />,
    },
    {
      path: "/cuestionario",
      element: <Cuestionario />,
    },
    {
      path: "/create/interactive",
      element: <QuizCreator />,
    },
    {
      path: "/question",
      element: <Question />,
    },
  ];
  const router = createBrowserRouter([...routesForNotAuthenticatedOnly]);
  return <RouterProvider router={router} />;
};

export default Routes;
