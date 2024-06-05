import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, Container, Offcanvas } from 'react-bootstrap';
import '../../public/style/Header.css'; // Custom CSS file

// Header component with navigation and offcanvas menu
function Header() {
  // State to control the visibility of the offcanvas menu
  const [show, setShow] = useState(false);

  // Function to close the offcanvas menu
  const handleClose = () => setShow(false);
  // Function to show the offcanvas menu
  const handleShow = () => setShow(true);

  return (
    <>
      {/* Navbar component */}
      <Navbar bg="light" expand="lg" className="custom-navbar border-bottom mb-4">
        <Container>
          {/* Navbar brand/logo */}
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <svg className="bi me-2" width="40" height="32">
              <use xlinkHref="#bootstrap"></use>
            </svg>
            <span id="header-navbar" className="fs-4">Bozyazı Yol Yardım</span>
          </Navbar.Brand>
          {/* Toggle button for offcanvas menu */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleShow} />
          {/* Collapsible navbar menu */}
          <Navbar.Collapse id="basic-navbar-nav" className="d-none d-lg-flex">
            <Nav className="ms-auto nav-pills">
              {/* Navigation links */}
              <Nav.Item>
                <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/kurumsal" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Corporate</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/bozyazi-yol-yardim" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Bozyazı Road Assistance</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/hizmetlerimiz" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Our Services</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/foto-galeri" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Photo Gallery</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/blog" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Blog</NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink to="/iletişim" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Contact</NavLink>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Offcanvas menu for mobile view */}
      <Offcanvas show={show} onHide={handleClose} className="custom-offcanvas">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Bozyazı Yol Yardım</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column nav-pills">
            {/* Offcanvas navigation links */}
            <Nav.Item>
              <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={handleClose}>Home</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/kurumsal" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={handleClose}>Corporate</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/bozyazi-yol-yardim" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={handleClose}>Bozyazı Road Assistance</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/hizmetlerimiz" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={handleClose}>Our Services</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/foto-galeri" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={handleClose}>Photo Gallery</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/blog" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={handleClose}>Blog</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink to="/iletişim" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'} onClick={handleClose}>Contact</NavLink>
            </Nav.Item>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Header;
