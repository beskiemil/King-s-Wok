import { NavLink, Link, useNavigate } from "react-router-dom";
import logo from "assets/logo-orange.svg";

const activeLink =
  "p-4 text-bold decoration-orange underline underline-offset-[10px]";
const unactiveLink = "p-4";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    //await logout();

    navigate("/");
  };

  //const name = userInfo?.name;     //jezeli usytkownik jest zalogowany, to wyswietla przycisk wylogowywania

  return (
    <header className="flex justify-between bg-greenGrey px-10 py-2 text-xl text-white shadow-md">
      <Link to="/" className="flex items-center justify-center">
        <img src={logo} alt="King's Wok" className="h-[4.5rem] w-[4.5rem]" />
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
        {name && (
          <>
            <NavLink
              to="/utworz_post"
              className={({ isActive }) =>
                isActive ? activeLink : unactiveLink
              }
            >
              Utwórz post
            </NavLink>
            <button onClick={handleLogout} className={unactiveLink}>
              Wyloguj się
            </button>
          </>
        )}
        {!name && (
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
