import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg border border-bottom">
      <div className="container-fluid">
        {/* //?  Logo */}
        <img
          id="logo-renjord"
          src="https://renjord.s3.us-east-2.amazonaws.com/logo-rejnord.png"
          alt="logo"
        />
        {/* //? Name a route */}
        <ul className="navbar-nav jusitfy-content-end">
          <li className="navbar-item">
            <Link to="/">Home</Link>
          </li>
          {/* <li className="navbar-item">
            <Link to="/create">Create</Link>
          </li>
          <li className="navbar-item">
            <Link to="/datas">Records</Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
