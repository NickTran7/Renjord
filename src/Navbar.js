import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg border border-bottom">
      <div className="container-fluid">
        <h1 className="navbar-branch">Renjord Jewelry</h1>
        {/* //? Name a route */}
        <ul className="navbar-nav jusitfy-content-end">
          <li className="navbar-item">
            <Link to="/">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/create">Create</Link>
          </li>
          <li className="navbar-item">
            <Link to="/datas">Datas</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
