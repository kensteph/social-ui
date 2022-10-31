import Register from "./Pages/register/Register";
import Login from "./Pages/login/Login.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/layout/Layout";
import Home from "./Pages/home/Home";
import Profile from "./Pages/profile/Profile";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element:<Home/>,
        },
        {
          path: "/profile/:id",
          element: <Profile/>,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
