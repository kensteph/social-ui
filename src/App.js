import Register from "./Pages/register/Register";
import Login from "./Pages/login/Login.jsx";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Layout from "./Components/layout/Layout";
import Home from "./Pages/home/Home";
import Profile from "./Pages/profile/Profile";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";

function App() {
  const {currentUser} = useContext(AuthContext);
  console.log(currentUser)
  // This component will allow us to protect some routes by wrapping the given component in it
  const ProtectedRoute=( {children} )=>{
    if(currentUser!=null) return children 
    return (<Navigate to="/login" />)
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProtectedRoute><Layout /></ProtectedRoute>,
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
