// Admin side
import AdminRoot from "../../pages/Admin";
import AddEmployee from "../../pages/Admin/AddEmployee";
import EditEmployees from "../../pages/Admin/EditEmployee";
import MainRoot from "../../pages/Main";

// Main Side
import Home from "../../pages/Main/Home";
import Favorites from "../../pages/Main/Favorites";
import UserEmployees from "../../pages/Main/UserEmployees";
import EmployeeDetail from "../../pages/Main/EmployeeDetail";
import AdminEmployee from "../../pages/Admin/Employees";
import NotFound from "../../pages/Main/NotFound";

export const ROUTES = [
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        path: "",
        element: <AdminEmployee />,
      },
      {
        path: "edit",
        element: <EditEmployees />,
      },
      {
        path: "add",
        element: <AddEmployee />,
      },
    ],
  },

  {
    path: "/",
    element: <MainRoot />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "fav",
        element: <Favorites />,
      },
      {
        path: "employees",
        element: <UserEmployees />,
      },
      {
        path: "employ/:id",
        element: <EmployeeDetail />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];
