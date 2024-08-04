import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "./NavBar.css";

export function NavBar() {
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let selectedSectionId = null;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          selectedSectionId = section.id;
        }
      });

      setSelectedOption(selectedSectionId);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavLinkClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100,
        behavior: "smooth",
      });
    }

    // Solo actualiza el estado si la opción seleccionada es diferente
    if (selectedOption !== targetId) {
      setSelectedOption(targetId);
    }
  };

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        <Navbar.Brand href="#home">
          <span className="brand-text">{"<VR/>"}</span> {/* Texto <VR/> */}
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="custom-toggler"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              onClick={(e) => handleNavLinkClick(e, "inicio")}
              href="#inicio"
            >
              Inicio
            </Nav.Link>
            <Nav.Link
              onClick={(e) => handleNavLinkClick(e, "acerca-de-mi")}
              href="#acerca-de-mi"
            >
              Acerca de mi
            </Nav.Link>
            <Nav.Link
              onClick={(e) => handleNavLinkClick(e, "mis-habilidades")}
              href="#mis-habilidades"
            >
              Mis Habilidades
            </Nav.Link>
            <Nav.Link
              onClick={(e) => handleNavLinkClick(e, "proyectos")}
              href="#proyectos"
            >
              Proyectos
            </Nav.Link>
            <Nav.Link
              onClick={(e) => handleNavLinkClick(e, "contacto")}
              href="#contacto"
            >
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
