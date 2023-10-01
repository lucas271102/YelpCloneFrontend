import { createBrowserRouter } from "react-router-dom";
import Home from '../pages/Home.jsx'
import UpdatePage from '../pages/UpdatePage.jsx'
import RestaurantPage from '../pages/RestaurantDetailPage.jsx'



const router = createBrowserRouter([
    {
        path:'/',element:<Home/>,
        path:'/restaurants/:id/update', element:<UpdatePage/>,
        path:'/restaurants/:id', element:<RestaurantPage/>
    }
])
export default router