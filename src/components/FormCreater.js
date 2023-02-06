import { React, useState } from 'react';
import { Button, Container, Jumbotron, FormGroup, Form, Label, Input, FormFeedback } from 'reactstrap';
import NavBar from './NavBar';

function FormCreater() {
  const [submitted, setSubmitted] = useState(false);

  const [values, setValues] = useState({
    Title: '',
    Motif: '',
  });
  const handleSubmit = (evt) => {
    evt.preventDefault(); setSubmitted(true);

    alert(`Submitting Title ${values.Title} ${values.Motif}`)
  }

  const handleFirstTitleInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      Title: event.target.value,
    }));
  };

  const handleMotifInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      Motif: event.target.value,
    }));
  };

  return (
    <Container onSubmit={handleSubmit}>
      <NavBar />

      <Jumbotron>
        <h1 className="display-4">Créer un nouveau formulaire</h1>
        <hr className="my-4" />
        <Form >
          <FormGroup>
            <Label for="exampleEmail">
              Titre du formulaire *
            </Label>
            <Input

              id='first-name'
              class='form-field'
              type='text'
              placeholder='Title'
              name='Title'
              value={values.Title}
              onChange={handleFirstTitleInputChange}
            />
            {submitted && !values.Title && <span id='first-name-error'>Veuillez entrer le titre du formulaire</span>}


          </FormGroup>

          <FormGroup>
            <Label for="exampleEmail">
              Motif            </Label>
            <Input id='first-name'
              class='form-field'
              type='text'
              placeholder='Motif'
              name='Motif'
              value={values.Motif}
              onChange={handleMotifInputChange} />
            <FormFeedback>
              You will not be able to see this
            </FormFeedback>

          </FormGroup>
          <Button color="primary" type="submit" value="Submit" >Créer un formulaire</Button>

        </Form>
      </Jumbotron>

    </Container>
  );
}

export default FormCreater;
