/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";

const UnAuthLayout = ({ user }) => {
  return <>{user ? <Navigate to={"/"} /> : <Outlet />} </>;
};

export default UnAuthLayout;
