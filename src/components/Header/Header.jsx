import "./Header.css";

// import {NavBar}  from  "bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        {/* <nav className="navbar navbar-expand-lg bg-body-tertiary"> */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <Link className="navbar-brand" href="#">
            <img className='img-navbar' src="../../src/assets/zapato.png" alt="" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page"  to="/"> Home </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/Registro">Registro </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/Login">Login</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export { Header };
