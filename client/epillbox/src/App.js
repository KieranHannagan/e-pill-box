

import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Badge, Card } from 'react-bootstrap';

import Header from './components/Header';
import Footer from './components/Footer';
// import Medications from './components/Medications';

function App() {
  return (
    
    <section className="App">
      <Header />
      
      <br>
      </br>
        <Container className='home'>
          <h1>
        <Badge className="lg-6" pill bg="secondary" text='warning'>
              ePillbox
            </Badge>{' '}
            </h1>
            <br />
         
            <Button variant="secondary" type="submit" className='custom-btn'>
              Sign Up
            </Button>
            <br />
            <br>
            </br>
            
            <br>
            </br>
            <br>
            </br>
            


           

            <Button className='lg-6' variant="secondary" type="submit">
                 Login  
            </Button>


          








        </Container>
        <br>
        </br>
        <br>
        </br>
        <Footer />
    </section >

     
  );
}

export default App;