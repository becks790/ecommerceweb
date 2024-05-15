import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Assets/freshcart-logo.svg";
import "@fortawesome/fontawesome-free";
import { authContext } from "../Contexts/AuthContext";

export default function Navbar() {
  const { userIsLoggedIn,setUserIsLoggedIn } = useContext(authContext);
  const navigate = useNavigate ();
  function logOut () {
    setUserIsLoggedIn (false);
    localStorage.removeItem ('token')
    navigate ('/login')
  }
  

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand" href="#">
          <img src={logo} alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {userIsLoggedIn && (
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={"home"}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"cart"}>
                  Cart
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"allProducts"}>
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"categories"}>
                  Categories
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"brands"}>
                  Brands
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to={"allOrders"}>
                  Orders
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"wishlist"}>
                  Wish List
                </Link>
              </li>

            </ul>
          )}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item d-flex align-items-center">
              <i className="fa-brands fa-facebook"></i>
              <i className="fab mx-2 fa-twitter"></i>
              <i className="fab mx-2 fa-instagram"></i>
              <i className="fab mx-2 fa-youtube"></i>
              <i className="fab mx-2 fa-tiktok"></i>
            </li>

            {userIsLoggedIn ? (
              <li className="nav-item">
                <span onClick={logOut} className="nav-link cursor-pointer ">Logout</span>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to={"login"}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"register"}>
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
