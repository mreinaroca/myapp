/**
 * Es la barra de navegación sacada de Bootstrap
 * @author Miguel Arturo Reina
 */
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/mascotas">Adóptame</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;