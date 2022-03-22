import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Badge } from 'react-bootstrap';
import React from "react";
<<<<<<< HEAD
import { Redirect, useParams, Link, render } from "react-router-dom";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { EDIT_DRUG } from "../utils/mutations";
=======
import { Link } from "react-router-dom";
// import Auth from "../utils/auth";
// import { useQuery } from "@apollo/client";
// import { QUERY_THOUGHTS, QUERY_ME_BASIC } from "../utils/queries";
>>>>>>> feature/medication-Page

import { DateTime } from "../utils/date"

const Home = () => {
<<<<<<< HEAD
  const { username: userParam } = useParams();
  const loggedIn = Auth.loggedIn();

  const { loading, data } = useQuery(QUERY_ME);

  const user = data?.me || {};
  const myMedications = [
    {id : 1, name : "cool", count : "10"},
    {id : 2, name : "medium", count : "12"},
    {id : 3, name : "hot", count : "15"}
  ]

  console.log(myMedications);
  // const[]

   if (Auth.loggedIn()) {
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
              <h2>Welcome back, {user.username}!</h2>
              <DateTime></DateTime>
              <h3>medications today:</h3>
              <div>{myMedications.map((myMedication)=>{
                return <p key={myMedication.id}>{`${myMedication.name}: ${myMedication.count} days `}
                <button>Eaten</button></p>
                })}
              </div>
          </Container>
          <br />
          <br />
      </section >
    );
   } else {
    return (
=======
  // const { username: userParam } = useParams();
  // const loggedIn = Auth.loggedIn();
  
 
  //  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
  //    return (
  //    <p>Hello</p>);
  //  }
  //  else {
    const num = 1;
     if ( num === 1) {
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
>>>>>>> feature/medication-Page
    
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
