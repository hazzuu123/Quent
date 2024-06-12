import Login from "pages/Login";
import Layout from "components/layout/Layout";
import Home from "pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routeList = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
];

const router = createBrowserRouter(
  routeList.map((route) => {
    return {
      ...route,
      element: <Layout>{route.element}</Layout>,
      errorElement: <main>에러 페이지 구현 예정</main>,
    };
  })
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
