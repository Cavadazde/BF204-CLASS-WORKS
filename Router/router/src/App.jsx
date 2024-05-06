
import { RouterProvider, createBrowserRouter} from "react-router-dom";

import './App.css'
import { ROUTES } from "./components/routes/ROUTES.jsx";




const routes=createBrowserRouter(ROUTES)
function App() {
 

  return (
    <>
  <RouterProvider router={routes}/>
    </>
  )
}

export default App
