import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import AppLayout from "../components/AppLayout";
import User from "../pages/user";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import { ModalContextProvider } from "../context/ModalContext";
import Search from "../pages/Search";
import Product from "../pages/Product";
import RedirectIfAuthen from "../components/RedirectIfAuthen";
import Order from "../pages/Order";
import CreateProduct from "../pages/CreateProduct";
import { BidProduct } from "../pages/BidProduct";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        element={
          <ModalContextProvider>
            <AppLayout />
          </ModalContextProvider>
        }
      >
        <Route path="/" element={<Home />} />
        <Route
          path="/cart"
          element={
            <RedirectIfAuthen>
              <Cart />
            </RedirectIfAuthen>
          }
        />
        <Route
          path="/order"
          element={
            <RedirectIfAuthen>
              <Order />
            </RedirectIfAuthen>
          }
        />
        <Route path="/user" element={<User />} />
        <Route path="/bid/:productId" element={<BidProduct />} />
        <Route path="/search/:searchedTitle" element={<Search />} />
        <Route path="/createProduct" element={<CreateProduct />} />
        <Route path="/product/:productId" element={<Product />} />
      </Route>
    </>
  )
);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
