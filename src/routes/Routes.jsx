import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import AppLayout from "../components/AppLayout";
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<AppLayout />}>
        <Route path="/" element={<p>Hello</p>} />
        <Route path="/hi" element={<p>Test2</p>} />
      </Route>
    </>
  )
);

function Routes() {
  return <RouterProvider router={router} />;
}

export default Routes;
