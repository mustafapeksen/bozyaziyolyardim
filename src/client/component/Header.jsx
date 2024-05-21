import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
        <span className="fs-4">Bozyazı Yol Yardım</span>
      </a>

      <ul className="nav nav-pills">
        <li className="nav-item">
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Anasayfa
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/kurumsal"
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Kurumsal
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/bozyazi-yol-yardim"
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Bozyazı Yol Yardım
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/hizmetlerimiz"
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Hizmetlerimiz
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/foto-galeri"
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Foto Galeri
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/blog"
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            Blog
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/iletişim"
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            İletişim
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
