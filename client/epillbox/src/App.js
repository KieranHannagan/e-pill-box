import logo from './logo.svg';
import './App.css';
import React from 'react';
import'bootstrap/dist/css/bootstrap.min.css';
import { Button, Alert, Breadcrumb, Card, Form} from 'react-bootstrap';



function App() {
  return (
    <div className="App">
    <header className="App-header">
      <Form>
        <Form.Group controlId="formEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Exampl@email.com" />
          <Form.Text className="text-muted">
            We'll never share your email address.
          </Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label> Password</Form.Label>
        </Form.Group>
      </Form>
      <Card>
        <Card.Img src ="https://icons.iconarchive.com/icons/medicalwp/medical/256/Pills-icon.png"/>
        <Card.Title>
          Card T
        </Card.Title>
        <Card.Text>
         this is the expampl
        </Card.Text>
      </Card>
      <Breadcrumb>
        <Breadcrumb.Item> Test </Breadcrumb.Item>
        <Breadcrumb.Item> Test 2</Breadcrumb.Item>
        <Breadcrumb.Item> Test 3 </Breadcrumb.Item>
      </Breadcrumb>
      <Alert vartian="primary"> This is a button</Alert>
      <Button>TestButton</Button>
      
    </header>
  </div>
  );
}

export default App;
