import React from "react";

import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_THOUGHTS, QUERY_ME_BASIC } from "../utils/queries";

const Home = () => {
  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <p>Time to take your medications! (Todays DATE)</p>
    </main>
  );
};

export default Home;
