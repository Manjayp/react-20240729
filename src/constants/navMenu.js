const navMenu = [
  {
    label: "Home",
    route: "/",
    auth: true,
  },
  {
    label: "About",
    route: "/about",
    auth: true,
  },
  {
    label: "Products",
    route: "/products",
    auth: true,
  },
  {
    label: "Contact",
    route: "/contact",
    auth: true,
  },
  {
    label: "Login",
    route: "/auth/login",
    auth: false,
  },
  {
    label: "Register",
    route: "/auth/register",
    auth: false,
  },
];

export default navMenu;
