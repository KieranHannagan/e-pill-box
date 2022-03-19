

import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Form, Container, Badge } from 'react-bootstrap';

import Header from './components/Header';
import Medications from './components/Medications';

function App() {
  return (
    
    <section className="App">
      <Header />
      {/* <header className="App-header"> */}
        <Container className='login'>
        <Badge pill bg="secondary">
              ePillbox
            </Badge>{' '}
            <br />
         <Medications />
          <Form inline>
            
            <Form.Group row className="mb-2 mr-sm-2" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                Please sign in with your email.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />

            </Form.Group>

            <Button variant="secondary" type="submit">
              Login
            </Button>
            <br />
            <Form.Group row className="mb-2 mr-sm-2" controlId="formBasicEmail">
              <Form.Text className="text-muted">IF not Signed-Up please do so now.</Form.Text>

              <br />
              <Form.Label>Please enter an email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />


            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="secondary" type="submit">
              Sign Up
            </Button>


          </Form>








        </Container>
        <Card>
          <link src="https://icons.iconarchive.com/icons/medicalwp/medical/256/Pills-icon.png" />
          {/* <Card.Title>
          Card T
        </Card.Title>
        <Card.Text>
         this is the expampl
        </Card.Text> */}
        </Card>
        {/* <Breadcrumb>
        <Breadcrumb.Item> Test </Breadcrumb.Item>
        <Breadcrumb.Item> Test 2</Breadcrumb.Item>
        <Breadcrumb.Item> Test 3 </Breadcrumb.Item>
      </Breadcrumb> */}
        {/* <Alert vartian="primary"> This is a button</Alert>
       */}

      {/* </header> */}
    </section >
  );
}

export default App;