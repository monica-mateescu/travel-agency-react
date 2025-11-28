import { NavLink, Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="container mx-auto flex justify-between items-center  text-indigo-100">
      <Link to="/" className="text-xl font-semibold">
        Wanderlust Travel Co.
      </Link>
      <ul className="flex space-x-4 text-sm font-semibold">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600"
                : "hover:text-indigo-600 active:text-indigo-600"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/destinations"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600"
                : "hover:text-indigo-600 active:text-indigo-600"
            }
          >
            Destinations
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600"
                : "hover:text-indigo-600 active:text-indigo-600"
            }
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-indigo-600"
                : "hover:text-indigo-600 active:text-indigo-600"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
