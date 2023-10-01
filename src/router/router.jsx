import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import UpdatePage from "../pages/UpdatePage";
import RestaurantDetailPage from "../pages/RestaurantDetailPage";

const routes = createBrowserRouter([
    {path:'/', element:<Home/>},
    {path:'/restaurants/:id/update', element:<UpdatePage/>},
    {path:'/restaurants/:id', element:<RestaurantDetailPage/>}
])
export default routes