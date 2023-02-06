import { React } from 'react';
import { Container, Jumbotron } from 'reactstrap';
import NavBar from './NavBar';
function Home() {


  return (
    <Container >
      <NavBar/>
      <Jumbotron>
        <h1>Page d'accueil</h1>
      </Jumbotron>

    </Container>
  );
}

export default Home;
