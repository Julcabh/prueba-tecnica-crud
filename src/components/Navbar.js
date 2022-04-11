import { Link } from "react-router-dom";
import { AiOutlineSave } from "react-icons/ai";
import { SiFirebase } from "react-icons/si";

export const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container">
      <Link className="navbar-brand d-flex" to="/">
        <SiFirebase size="1.5rem" className="me-2" />
          CRUD Monitorias
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
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link
              className="d-flex align-items-center btn btn-primary shadow-none"
              to="/add"
            >
              <AiOutlineSave className="me-1" size="1.5rem" />
                Registrar Monitores
            </Link>
            
          </li>

          <li className="nav-item">
            <Link
              className="d-flex align-items-center btn btn-primary shadow-none"
              to="/monitorias"
            >
              <AiOutlineSave className="me-1" size="1.5rem" />
                Registrar Nueva Monitoria
            </Link>
            
          </li>

          <li className="nav-item">
            <Link
              className="d-flex align-items-center btn btn-primary shadow-none"
              to="/"
            >
              <AiOutlineSave className="me-1" size="1.5rem" />
                Ver Monitorias
            </Link>
            
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
);
