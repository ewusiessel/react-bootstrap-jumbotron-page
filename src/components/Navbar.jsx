import { Navbar, Nav } from "react-bootstrap";

const NavigationBar = (props) => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="#features">Home</Nav.Link>
        <Nav.Link href="#pricing">Browse</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavigationBar;
