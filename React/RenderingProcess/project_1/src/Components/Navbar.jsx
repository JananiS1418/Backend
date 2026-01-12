import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <p>Logo</p>
      </div>

      <div className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
