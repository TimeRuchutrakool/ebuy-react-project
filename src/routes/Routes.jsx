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
import Product from "../pages/Product";

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
        <Route path="/cart" element={<Cart />} />
        <Route path="/user" element={<User />} />
        <Route path="/product/:productId" element={<Product />} />
      </Route>
    </>
  )
);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
