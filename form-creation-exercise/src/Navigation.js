import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/esm/Container";

function Navigation({ events, handleSelect }) {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand> BandTix!</Navbar.Brand>
        <Nav className="me-auto">
          {events.map((event) => (
            <Nav.Link
              key={event.id}
              href=""
              onClick={() => {
                handleSelect(event);
              }}
            >
              {event.name}
            </Nav.Link>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
