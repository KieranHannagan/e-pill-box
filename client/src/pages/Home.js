import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Badge, Card } from 'react-bootstrap';
import React from "react";
import { Redirect, useParams, Link, render } from "react-router-dom";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_THOUGHTS, QUERY_ME_BASIC } from "../utils/queries";

import { DateTime } from "../utils/date"

const Home = () => {
  const { username: userParam } = useParams();
  const loggedIn = Auth.loggedIn();
  
 
  //  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
  //    return (
  //    <p>Hello</p>);
  //  }
  //  else {
     if (1 === 1) {
              return (
    
    <section className="App">
      <br>
      </br>
        <Container className='home'>
          <h1>
        <Badge className="lg-6" pill bg="secondary" text='warning'>
              ePillbox
            </Badge>{' '}
            </h1>
            <br />
            <DateTime></DateTime>
        </Container>
        <br />
        <br />
    </section >
  );
   }
   else {
         return (
    
    <section className="App">
      <br>
      </br>
        <Container className='home'>
          <h1>
        <Badge className="lg-6" pill bg="secondary" text='warning'>
              ePillbox
            </Badge>{' '}
            </h1>
            <br />   
            <Link to="/Signup">    
            <Button variant="secondary" type="submit" className='custom-btn'>
              Sign up
            </Button>
            </Link>
            <br />
            <br>
            </br>
            <br>
            </br>
            <Link to="/Login">
            <Button className='lg-6' variant="secondary" type="submit">
                 Login
            </Button>
            </Link>
        </Container>
        <br>
        </br>
        <br>
        </br>
    </section >
  );
  }
};

export default Home;
