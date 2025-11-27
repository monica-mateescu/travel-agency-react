import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="container mx-auto flex justify-between items-center  text-slate-100">
      <Link to="/" className="text-xl font-semibold">
        Travel Agency
      </Link>
      <ul className="flex space-x-4 text-sm font-semibold">
        <li>
          <Link to="/" className="hover:text-slate-500">
            Home
          </Link>
        </li>
        <li>
          <Link to="/destinations" className="hover:text-slate-500">
            Destinations
          </Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-slate-500">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:text-slate-500">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
