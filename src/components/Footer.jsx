import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-indigo-300 p-4">
      <div className="container mx-auto  text-slate-100 text-sm">
        <ul className="flex space-x-4 text-xs justify-center">
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
      </div>
    </footer>
  );
};

export default Footer;
