import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button, Container, Badge, Card } from 'react-bootstrap';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Medications from "./pages/Medications";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/profile/:username?" component={Profile} />
              <Route exact path="/medications" component={Medications} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;

// import './App.css';
// import React from 'react';

// import Header from './components/Header';
// import Footer from './components/Footer';
// import Medications from './components/Medications';

// function App() {
//   return (
    
//     <section className="App">
//       <Header />
      
//       <br>
//       </br>
//         <Container className='home'>
//           <h1>
//         <Badge className="lg-6" pill bg="secondary" text='warning'>
//               ePillbox
//             </Badge>{' '}
//             </h1>
//             <br />
         
//             <Button variant="secondary" type="submit" className='custom-btn'>
//               Sign Up
//             </Button>
//             <br />
//             <br>
//             </br>
//             <br>
//             </br>
//             <br>
//             </br>
            


           

//             <Button className='lg-6' variant="secondary" type="submit">
//                  Login  
//             </Button>


          








//         </Container>
//         <br>
//         </br>
//         <br>
//         </br>
//         <Footer />
//     </section >

     
//   );
// }

// export default App;