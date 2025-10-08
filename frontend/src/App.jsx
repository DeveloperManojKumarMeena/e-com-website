import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import asyncUser from "./store/actions/UserAction";
import Mainroutes from "./routes/Mainroutes.jsx";
import Nav from "./components/Nav.jsx";
import { useLocation } from "react-router-dom";

const App = () => {
  const user = useSelector((state) => state.User);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncUser());
  }, [dispatch]);

  const location = useLocation();
  const hideNavbarPaths = ["/login"]; 

  return (
    <>
      {!hideNavbarPaths.includes(location.pathname) && <Nav />}
      <Mainroutes />
    </>
  );
};

export default App;
