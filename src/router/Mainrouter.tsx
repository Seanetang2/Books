import {createBrowserRouter} from "react-router-dom";
import { Layout } from "../Block/Layout";
import Homescreen from "../Pages/Homescreen";
import Upload from "../Pages/Uploadpage";

export const Mainrouter = createBrowserRouter([
{
    path: "/",
    element: <Layout/>,
   children:[
    {
       index: true,
       element: <Homescreen/>
    }
   ]
},
{
   path: "/upload",
   element: <Upload/>
}
])