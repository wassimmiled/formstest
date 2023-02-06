import { React } from 'react';
import { Container, Jumbotron } from 'reactstrap';
import NavBar from './NavBar';

function NotFound() {


  return (
    <Container >
      <NavBar />

      <Jumbotron>
        <h1>404 Page introuvable</h1>
      </Jumbotron>

    </Container>
  );
}

export default NotFound;
