import React from "react";
import { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Loader from "../Layout/Loader";
import { authRoutes } from "./AuthRoutes";
import LayoutRoutes from "../Route/LayoutRoutes";
import Signin from "../Auth/Signin";
import PrivateRoute from "./PrivateRoute";
import { classes } from "../Data/Layouts";
import { HOME_ROUTE } from "./RouthPath";
import { useDispatch, useSelector } from "react-redux";
import { SetToken } from "../Redux_Store/Actions/userActions";
import RedirectExternal from "./RedirectExternal";
import { MetaTagsArray } from "../Constant/metaTags";
import { AddMetaTagsToHead } from "../Components/Common/Component/helperFunction";
// setup fake backend

const Routers = () => {
  const dispatch = useDispatch();

  const login = useState(JSON.parse(localStorage.getItem("login")))[0];
  const [authenticated, setAuthenticated] = useState(false);
  const defaultLayoutObj = classes.find(
    (item) => Object.values(item).pop(1) === "compact-wrapper"
  );
  const layout =
    localStorage.getItem("layout") || Object.keys(defaultLayoutObj).pop();

  useEffect(() => {
    // Every time setToke in global state from local storage during page Loading
    const rentalUserAuthToken = localStorage.getItem("rentalUserAuthToken");
    dispatch(SetToken({ Token: rentalUserAuthToken }));

    let abortController = new AbortController();
    setAuthenticated(JSON.parse(localStorage.getItem("authenticated")));
    console.ignoredYellowBox = ["Warning: Each", "Warning: Failed"];
    console.disableYellowBox = true;

    return () => {
      abortController.abort();
    };
  }, []);

  useEffect(() => {
    AddMetaTagsToHead(MetaTagsArray);
  }, []);
  return (
    <BrowserRouter basename={"/"}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path={"/"} element={<PrivateRoute />}>
            {login || authenticated ? (
              <>
                <Route exact element={<Navigate to={`${HOME_ROUTE}`} />} />
                <Route
                  exact
                  path={`/`}
                  element={<Navigate to={`${HOME_ROUTE}`} />}
                />
              </>
            ) : (
              ""
            )}
            <Route path={`/*`} element={<LayoutRoutes />} />
          </Route>

          <Route
            exact
            path={`${process.env.PUBLIC_URL}/login`}
            element={<Signin />}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/admin`}
            element={<RedirectExternal />}
          />
          {authRoutes.map(({ path, Component }, i) => (
            <Route path={path} element={Component} key={i} />
          ))}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routers;
