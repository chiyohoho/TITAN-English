import Cart from "../pages/cart";
import Homepage from "../pages/home";

const publicRoutes = [
    {
        path:'/',component: Homepage,nestedRoute:[{}]
    },
    {
        path:'/cart',component: Cart,nestedRoute:[{}]
    },
]

export {publicRoutes}