import Register from "./register/Register";
import Login from "./login/Login.jsx";
import { createBrowserRouter, RouterProvider} from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
  ]);
  
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
