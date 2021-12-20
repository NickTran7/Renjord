import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const hideMenuToggle = () => {
    const nav = document.getElementById("myNavbar");
    const btn = document.getElementById("navbarBtn");
    // const offcanvasBackdrop = document.querySelector("fade");
    // if (offcanvasBackdrop) {
    //   offcanvasBackdrop.remove();
    // }
    nav.classList.remove("show");

    btn.classList.add("collapsed");
  };
  return (
    <nav className="navbar navbar-expand-lg border border-bottom">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#myNavbar"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          id="navbarBtn"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-filter-left" viewBox="0 0 16 16">
            <path d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z" />
          </svg>
        </button>
        <h1 className="navbar-branch">Renjord Jewelry</h1>
        {/* //? Name a route */}

        <div className="offcanvas offcanvas-start w-75" id="myNavbar">
          <div className="offcanvas-header">
            <h3>Renjord Jewelry</h3>
          </div>
          <div className="offcanvas-body justify-content-between">
            <ul className="navbar-nav">
              <li className="nav-item" data-bs-dismiss="offcanvas">
                <Link to="/" onClick={() => hideMenuToggle()}>
                  Home
                </Link>
              </li>
              <li className="nav-item" data-bs-dismiss="offcanvas">
                <Link to="/datas" onClick={() => hideMenuToggle()}>
                  Datas
                </Link>
              </li>
            </ul>
            <div data-bs-dismiss="offcanvas">
              <Link to="/create" onClick={() => hideMenuToggle()}>
                Create
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
