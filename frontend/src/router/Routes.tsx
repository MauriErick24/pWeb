import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import QuizCreator from "../page/QuizCreator";
import { Cuestionario } from "../page/Cuestionario";
import Question from "../page/Question";
import Login from "../page/Login";
import Register from "../page/Register";
import ProtectedRoute from "../components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/cuestionario",
    element: (
      <ProtectedRoute>
        <Cuestionario />
      </ProtectedRoute>
    ),
  },
  {
    path: "/create/interactive",
    element: (
      <ProtectedRoute>
        <QuizCreator />
      </ProtectedRoute>
    ),
  },
  {
    path: "/question",
    element: (
      <ProtectedRoute>
        <Question />
      </ProtectedRoute>
    ),
  },
]);

const Routes = () => <RouterProvider router={router} />;
export default Routes;
