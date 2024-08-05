import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import navMenu from "../constants/navMenu";

function Header() {
  const { user } = useSelector((state) => state.auth);

  const isAuth = user ? true : false;

  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-slate-700 text-white py-1 px-5 rounded"
      : "text-slate-700 py-1 px-5";

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
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
