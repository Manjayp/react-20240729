/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = ({ user }) => {
  return <>{user ? <Outlet /> : <Navigate to={"/auth/login"} />}</>;
};

export default AuthLayout;
