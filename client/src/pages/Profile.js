import React, { useState } from "react";
import { Redirect, useParams } from "react-router-dom";
import PopUp from "./addMedication"; 
import { Button, Container, Badge, Card } from 'react-bootstrap';

import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { ADD_MEDICATION, REMOVE_MEDICATION } from '../utils/mutations';
import Auth from "../utils/auth";

const Profile = (props) => {

  const [popState, setPopState] = useState ({ popped: false });
  const handlePop = async (event) => {
   this.setPopState({
    popped: !this.popState
   });
  };

  const { username: userParam } = useParams();

  const [addMedication] = useMutation(ADD_MEDICATION);
  const { loading, data } = useQuery(QUERY_ME);

  // const user = data?.me || data?.user || {};

  // redirect to homepage if not logged in
  if (!Auth.loggedIn()) {
    return <Redirect to="/" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
   <div>
    <div onClick={PopUp}>
      <button>New User?</button>
    </div>
    {/* {this.popState ? <PopUp toggle={this.togglePop} /> : null} */}
   </div>
  )
  
};

export default Profile;
