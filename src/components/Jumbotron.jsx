import { Container, Jumbotron } from "react-bootstrap";
import "../App";

function MyJumbotron() {
  return (
    <div>
      <Jumbotron fluid className="myContainer styleContrast styleOverlay">
        <Container>
          <h1 className="styleWhite">Book Store Now Open</h1>
          <p className="styleWhite">
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default MyJumbotron;
