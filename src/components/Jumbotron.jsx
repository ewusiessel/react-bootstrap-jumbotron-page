import { Container, Jumbotron } from "react-bootstrap";
import "../App";

function MyJumbotron() {
  return (
    <div>
      <Jumbotron fluid className="myContainer">
        <Container>
          <h1>Fluid jumbotron</h1>
          <p>
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
}

export default MyJumbotron;
