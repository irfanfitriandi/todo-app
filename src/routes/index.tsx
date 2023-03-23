import { lazy, Suspense, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const DashboardPage = lazy(() => import("pages/Dashboard"));
const DetailPage = lazy(() => import("pages/Detail"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardPage />,
  },
  {
    path: "/detail/:id",
    element: <DetailPage />,
  },
]);

const App = () => {
  return (
    <Suspense>
      <RouterProvider router={router}></RouterProvider>
    </Suspense>
  );
};

export default App;
