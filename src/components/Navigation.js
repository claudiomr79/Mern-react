import { Navbar, Nav, NavDropdown } from "react-bootstrap";

export default function Navigation() {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
      <Navbar.Brand>Task Manager</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link>Proyectos</Nav.Link>
          <NavDropdown title="Admin">
            <NavDropdown.Item>Usuarios</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link>Iniciar Sesión</Nav.Link>
          <Nav.Link>Registrarse</Nav.Link>
          <Nav.Link>Mi cuenta</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
