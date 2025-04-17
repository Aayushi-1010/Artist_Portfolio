import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Layout from "./Layout";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  // createRoutesFromElements,
  // Route,
  RouterProvider,
} from "react-router-dom";
import Loader from './components/Loader/Loader';
// import Home from "./components/Home/Home";
// import About from "./components/About/About";
// import Contact from "./components/Contact/Contact";
// import Portfolio from "./components/Portfolio/Portfolio";
// import Title from "./components/Title/Title";
import { ErrorPage } from "./components/Error/ErrorPage";
import { AuthProvider,useAuth } from "./context/AuthContext";
// import Dashboard from "./components/Dashboard/Dashboard";

const About = React.lazy(()=>import("./components/About/About"));
const Contact = React.lazy(()=>import("./components/Contact/Contact"));
const Home = React.lazy(()=>import("./components/Home/Home"));
const Portfolio = React.lazy(()=>import("./components/Portfolio/Portfolio"));
const Title = React.lazy(()=>import("./components/Title/Title"));
const Register = React.lazy(()=>import("./components/Register/Register"));
const Login = React.lazy(()=>import("./components/Login/Login"));


const AppRoutes = () => {
  const { user } = useAuth(); // Get authentication status

  const router = createBrowserRouter(
    user
      ? [
          {
            path: "/",
            element: <Layout />,
            errorElement: <ErrorPage />,
            children: [
              { path: "/", element: <Suspense fallback={<Loader />}><Home /></Suspense> },
              { path: "/home", element: <Suspense fallback={<Loader />}><Home /></Suspense> },
              { path: "/about", element: <Suspense fallback={<Loader />}><About /></Suspense> },
              { path: "/contact", element: <Suspense fallback={<Loader />}><Contact /></Suspense> },
              { path: "/portfolio", element: <Suspense fallback={<Loader />}><Portfolio /></Suspense> },
              { path: "/portfolio/:id", element: <Suspense fallback={<Loader />}><Title /></Suspense> },
            ],
          },
        ]
      : [
          {
            path: "/",
            element: <Layout />,
            errorElement: <ErrorPage />,
            children: [
              { path: "/", element: <Suspense fallback={<Loader />}><Home /></Suspense> },
              { path: "/home", element: <Suspense fallback={<Loader />}><Home /></Suspense> },
              { path: "/register", element: <Suspense fallback={<Loader />}><Register /></Suspense> },
              { path: "/login", element: <Suspense fallback={<Loader />}><Login /></Suspense> },
              { path: "/portfolio", element: <Suspense fallback={<Loader />}><Register /></Suspense> },
            ],
          },
        ]
  );

  return <RouterProvider router={router} />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();

// const router = createBrowserRouter(
//   [
//     {
//       path: "/",
//       element: <Layout />,
//       errorElement: <ErrorPage />,
//       children: [
//         {
//           path: "/",
//           element: <Suspense fallback={<Loader/>}><Home /></Suspense>,
//         },
//         {
//           path: "/about",
//           element: <Suspense fallback={<Loader/>}><About /></Suspense>,
//         },
//         {
//           path: "/contact",
//           element: <Suspense fallback={<Loader/>}><Contact /></Suspense>,
//         },
//         {
//           path: "/register",
//           element: <Suspense fallback={<Loader/>}><Register /></Suspense>,
//         },
//         {
//           path: "/login",
//           element: <Suspense fallback={<Loader/>}><Login /></Suspense>,
//         },
//         {
//           path: "/dashboard",
//           element: <Dashboard/>,
//         },
//         {
//           path: "/portfolio",
//           element: <Suspense fallback={<Loader/>}><Portfolio /></Suspense>,
//           // children: [{
//           //   path: ":id",
//           //   element: <Title />,
//           //}]
//         },
//         {
//           path: "/portfolio/:id",
//           element: <Suspense fallback={<Loader/>}><Title /></Suspense>,
//         }
//         // {
//         //   path: "*",
//         //   element: <ErrorPage />,
//         // },
//       ],
//     },
//   ]
//   // 
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <AuthProvider>
//     <RouterProvider router={router} />
//     </AuthProvider>
//   </React.StrictMode>
// );

// reportWebVitals();
