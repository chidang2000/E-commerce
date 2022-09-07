import Home from "../pages/Home/Home";
import Contact from "../pages/Contact/Contact";
import Catalog from "../pages/Catalog/Catalog";
import Product from "../pages/Product/Product";
import Cart from "../pages/Cart/Cart";
import configs from "../configs/routes";

const publicRoutes = [
  {
    path: configs.home,
    component: Home,
    display: "Trang Chủ",
  },

  {
    path: configs.catalog,
    component: Catalog,
    display: "Sản Phẩm",
  },
  {
    path: configs.catalogSlug,
    component: Product,
  },
  {
    path: configs.catalogSlug,
    component: Home,
  },

  {
    path: configs.contact,
    component: Contact,
    display: "Liên Hệ",
  },
  {
    path: configs.cart,
    component: Cart,
  },
];

export { publicRoutes };
