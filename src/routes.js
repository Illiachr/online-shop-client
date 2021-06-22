import { ADMIN_ROUTE, CART_ROUTE, ITEM_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./const";
import Admin from "./pages/Admin";
import Auth from "./pages/Auth";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import ItemPage from "./pages/ItemPage";

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin
  },
  {
    path: CART_ROUTE,
    Component: Cart
  }
];

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Auth
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Auth
  },
  {
    path: SHOP_ROUTE,
    Component: Shop
  },
  {
    path: ITEM_ROUTE + '/:id',
    Component: ItemPage
  }
];