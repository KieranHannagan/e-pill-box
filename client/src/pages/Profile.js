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
  // return (
  //   <div>Hello</div>
  // )
  // const handleClick = async () => {
  //   try {
  //     await addFriend({
  //       variables: { id: user._id },
  //     });
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  //  return (
  //   <div>
  //     <div className="flex-row mb-3">
  //       <h2 className="bg-dark text-secondary p-3 display-inline-block">
  //         Viewing {userParam ? `${user.username}'s` : 'your'} profile.
  //       </h2>

  //       {userParam && (
  //         <button className="btn ml-auto" onClick={handleClick}>
  //           Add Friend
  //         </button>
  //       )}
  //     </div>

  //     <div className="flex-row justify-space-between mb-3">
  //       <div className="col-12 mb-3 col-lg-8">
  //         <ThoughtList
  //           thoughts={user.thoughts}
  //           title={`${user.username}'s thoughts...`}
  //         />
  //       </div>

  //       <div className="col-12 col-lg-3 mb-3">
  //         <FriendList
  //           username={user.username}
  //           friendCount={user.friendCount}
  //           friends={user.friends}
  //         />
  //       </div>
  //     </div>
  //     <div className="mb-3">{!userParam && <ThoughtForm />}</div>
  //  </div>
  // );
};

export default Profile;
