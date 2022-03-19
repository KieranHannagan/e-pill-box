import React from "react";
import { Button, Card, Form, Container, Badge } from 'react-bootstrap';




const SignUp = () => {
        return (
        
            <Col  className='Secondary'>
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
              Sign Up
            </Button>
        </Container>
    
    );
}

export default SignUp;