import navMenu from "../constants/navMenu";

function Header() {
  return (
    <header className="shadow">
      <div className="container mx-auto">
        <div className="flex justify-between p-5">
          <div>LOGO</div>
          <nav>
            {navMenu.map((menu) => {
              return (
                <a key={menu.label} href={menu.route} className="px-5">
                  {menu.label}
                </a>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
