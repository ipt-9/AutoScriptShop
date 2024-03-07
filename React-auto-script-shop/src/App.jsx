import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./screens/Home";
import { Taskboard } from "./screens/Taskboard";
import { Shop } from "./screens/Shop";
import { AboutUs } from "./screens/AboutUs";
import { Disclamer } from "./screens/Disclamer";
import { Impressum } from "./screens/Impressum";
import { TermsConditions } from "./screens/TermsConditions";
import { Blog } from "./screens/Blog";
import { Shoppingcart } from "./screens/Shoppingcart";
import { ProductSpesific } from "./screens/ProductSpesific";
import { ProductSpesificScreen } from "./screens/ProductSpesificScreen";
import { CreateProfile } from "./screens/CreateProfile";
import { BuyAsGuest } from "./screens/BuyAsGuest";
import { ShoppingcartScreen } from "./screens/ShoppingcartScreen";
import { CreateProduct } from "./screens/CreateProduct";
import { BuyConfirmation } from "./screens/BuyConfirmation";
import { CreateProductScreen } from "./screens/CreateProductScreen";
import { Logout } from "./screens/Logout";
import { UserHub } from "./screens/UserHub";
import { DivWrapper } from "./screens/DivWrapper";
import { UserHubScreen } from "./screens/UserHubScreen";
import { Screen21 } from "./screens/Screen21";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/taskboard",
    element: <Taskboard />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
  {
    path: "/disclamer",
    element: <Disclamer />,
  },
  {
    path: "/impressum",
    element: <Impressum />,
  },
  {
    path: "/terms-conditions",
    element: <TermsConditions />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/shoppingcart",
    element: <Shoppingcart />,
  },
  {
    path: "/product-spesific",
    element: <ProductSpesific />,
  },
  {
    path: "/product-spesific-1",
    element: <ProductSpesificScreen />,
  },
  {
    path: "/create-profile-1",
    element: <CreateProfile />,
  },
  {
    path: "/buy-as-guest",
    element: <BuyAsGuest />,
  },
  {
    path: "/shoppingcart-2",
    element: <ShoppingcartScreen />,
  },
  {
    path: "/create-product-7",
    element: <CreateProduct />,
  },
  {
    path: "/buy-confirmation",
    element: <BuyConfirmation />,
  },
  {
    path: "/create-product",
    element: <CreateProductScreen />,
  },
  {
    path: "/logout",
    element: <Logout />,
  },
  {
    path: "/user-hub-2",
    element: <UserHub />,
  },
  {
    path: "/create-product-6",
    element: <DivWrapper />,
  },
  {
    path: "/user-hub-3",
    element: <UserHubScreen />,
  },
  {
    path: "/user-hub",
    element: <Screen21 />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
