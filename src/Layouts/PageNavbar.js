import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const PageNavbar = () => {
    return ( 
        <Navbar expand="lg" className="paciolan-background-color" data-bs-theme="dark">
            <Container fluid>
                <Navbar.Brand href="#home"><b>PAC</b>IOLAN</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link href="#home">Welcome, Josie Marckle (GMT)</Nav.Link>
                        <Nav.Link href="#home">Log Out</Nav.Link>
                        <Nav.Link href="#link">Help</Nav.Link>
                        <Nav.Link href="#link">My Account</Nav.Link>
                        <Nav.Link href="#link">Reporting</Nav.Link>
                        <Nav.Link href="#link">Utilities</Nav.Link>
                        <Nav.Link href="#link">Admin</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
 
export default PageNavbar;