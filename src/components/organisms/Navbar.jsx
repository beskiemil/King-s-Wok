import { useContext } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import logo from "assets/logo-orange.svg";
import { AuthContext } from "providers/AuthProvider";

const activeLink =
  "p-4 text-bold decoration-orange underline underline-offset-[10px]";
const unactiveLink = "p-4";

const Navbar = () => {
  const { userInfo, logout } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();

    navigate("/");
  };

  const { role } = userInfo;

  return (
    <header className="flex justify-between bg-greenGrey px-8 py-1 text-xl text-white shadow-md xl:py-2">
      <Link to="/" className="flex items-center justify-center">
        <img
          src={logo}
          alt="King's Wok"
          className="h-16 2xl:h-[4.5rem] 2xl:w-[4.5rem]"
        />
        <h1 className="font-serif text-2xl font-bold tracking-wider text-white">
          King&apos;s Wok
        </h1>
      </Link>
      <nav className="flex items-center justify-center">
        <NavLink
          to="/menu"
          className={({ isActive }) => (isActive ? activeLink : unactiveLink)}
        >
          Menu
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? activeLink : unactiveLink)}
        >
          O nas
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? activeLink : unactiveLink)}
        >
          Kontakt
        </NavLink>
      </nav>
      <div className="flex items-center justify-center">
        {role === "admin" && (
          <>
            <NavLink
              to="/add_product"
              className={({ isActive }) =>
                isActive ? activeLink : unactiveLink
              }
            >
              Dodaj produkt
            </NavLink>
            <button onClick={handleLogout} className={unactiveLink}>
              Wyloguj się
            </button>
          </>
        )}
        {role === "user" && (
          <>
            <NavLink
              to="/zamowienia"
              className={({ isActive }) =>
                isActive ? activeLink : unactiveLink
              }
            >
              Zamowienia
            </NavLink>
            <button onClick={handleLogout} className={unactiveLink}>
              Wyloguj się
            </button>
          </>
        )}
        {role === "" && (
          <>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive ? activeLink : unactiveLink
              }
            >
              ZALOGUJ
            </NavLink>
          </>
        )}
      </div>
    </header>
  );
};

export default Navbar;
