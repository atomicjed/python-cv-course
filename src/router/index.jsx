import {createBrowserRouter, Navigate, RouterProvider} from "react-router-dom";
import ModuleRouter from "../ModuleRouter.jsx";
import ModulesProvider from "../lib/context/modules.context.jsx";
import HelpMe from "../components/HelpMe.jsx";
import HelpMePage from "../components/HelpMePage.jsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={'/1'} replace />
  },
  {
    path: '/:moduleNumber',
    element: (
      <ModulesProvider>
        <ModuleRouter />
        <HelpMe />
      </ModulesProvider>
    )
  },
  {
    path: '/help-me',
    element: <HelpMePage />
  }
]);

export default () => <RouterProvider router={router} />;