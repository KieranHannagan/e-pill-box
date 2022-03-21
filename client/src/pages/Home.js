import React from "react";
import { Redirect, useParams } from "react-router-dom";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_THOUGHTS, QUERY_ME_BASIC } from "../utils/queries";


const Home = () => {
  const { username: userParam } = useParams();
  const loggedIn = Auth.loggedIn();
  
  //  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
  //   return <Redirect to="/profile" />;
  // }
  return (
    
    <container class="md-12">
      <br></br>
      <br></br>
      <p>Time to take your medications! (Todays DATE)</p>
      <br></br>
      <br></br>
    </container >
  );
};

export default Home;
