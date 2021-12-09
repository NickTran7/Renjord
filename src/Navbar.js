import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Renjord Jewelry</h1>
      {/* //? Name a route */}
      <Link to="/">Home</Link>
      <Link to="/create">Create</Link>
      <Link to="/datas">Datas</Link>
    </nav>
  );
};
export default Navbar;
