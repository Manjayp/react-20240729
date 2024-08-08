import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import navMenu from "../constants/navMenu";
import { logoutUser } from "../redux/auth/authSlice";

function Header() {
  const { user } = useSelector((state) => state.auth);

  const isAuth = user ? true : false;

  const dispatch = useDispatch();

  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-slate-700 text-white py-1 px-5 rounded"
      : "text-slate-700 py-1 px-5";

  function logout() {
    dispatch(logoutUser());

    localStorage.removeItem("authToken");
  }

  return (
    <header className="shadow">
      <div className="container mx-auto">
        <div className="flex justify-between p-5">
          <div>LOGO</div>
          <nav>
            {navMenu
              .filter((menu) => menu.auth === isAuth)
              .map((menu) => {
                return (
                  <NavLink
                    key={menu.label}
                    to={menu.route}
                    className={linkClass}
                  >
                    {menu.label}
                  </NavLink>
                );
              })}

            {isAuth ? (
              <>
                <span className="mr-5 border border-black"></span>
                <button
                  className="bg-blue-500 text-white rounded-3xl px-5 py-2 border-l"
                  onClick={logout}
                >
                  Logout
                </button>
              </>
            ) : null}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
