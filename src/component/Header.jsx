import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import '../../public/style/Header.css'; // Özel stil dosyanız

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="light" expand="lg" className="custom-navbar border-bottom mb-4">
        <Container>
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <svg className="bi me-2" width="40" height="32">
              <use xlinkHref="#bootstrap"></use>
            </svg>
            <span id="header-navbar" className="fs-4">Bozyazı Yol Yardım</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleShow} />
          <Navbar.Collapse id="basic-navbar-nav" className="d-none d-lg-flex">
            <Nav className="ms-auto nav-pills">
              <Nav.Item>
                <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Anasayfa</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/kurumsal" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Kurumsal</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/bozyazi-yol-yardim" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Bozyazı Yol Yardım</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/hizmetlerimiz" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Hizmetlerimiz</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/foto-galeri" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Foto Galeri</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/blog" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Blog</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/iletişim" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>İletişim</NavLink>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose} className="custom-offcanvas">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Bozyazı Yol Yardım</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column nav-pills">
            <Nav.Item>
              <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={handleClose}>Anasayfa</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/kurumsal" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={handleClose}>Kurumsal</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/bozyazi-yol-yardim" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={handleClose}>Bozyazı Yol Yardım</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/hizmetlerimiz" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={handleClose}>Hizmetlerimiz</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/foto-galeri" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={handleClose}>Foto Galeri</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/blog" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={handleClose}>Blog</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/iletişim" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={handleClose}>İletişim</NavLink>
            </Nav.Item>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Header;
