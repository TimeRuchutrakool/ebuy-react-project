import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import AppLayout from "../components/AppLayout";
import User from "../pages/User";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import { ModalContextProvider } from "../context/ModalContext";
import Search from "../pages/Search";
import Product from "../pages/Product";
import RedirectIfAuthen from "../components/RedirectIfAuthen";
import Order from "../pages/Order";
import CreateProduct from "../pages/CreateProduct";
import EditProduct from "../pages/EditProduct";
import PaymentSuccess from "../pages/PaymentSuccess";
import Bid from "../pages/Bid";
import Reward from "../pages/Reward";
import BidList from "../pages/BidList";
import SellerSite from "../pages/SellerSite";

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
        <Route
          path="/user/:Modes"
          element={
            <RedirectIfAuthen>
              <User />
            </RedirectIfAuthen>
          }
        />
        <Route path="/bid/:productId" element={<Bid />} />
        <Route path="/auctioning" element={<BidList />} />
        <Route path="/search/:searchedTitle" element={<Search />} />
        <Route
          path="/createProduct"
          element={
            <RedirectIfAuthen>
              <CreateProduct />
            </RedirectIfAuthen>
          }
        />
        <Route
          path="/editProduct/:productId"
          element={
            <RedirectIfAuthen>
              <EditProduct />
            </RedirectIfAuthen>
          }
        />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/reward" element={<Reward />} />
        <Route path="/payment" element={<PaymentSuccess />} />
        <Route path="/seller/:userId" element={<SellerSite />} />
      </Route>
    </>
  )
);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
