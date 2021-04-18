import React from "react";
import "./styles/main.scss";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import MainBody from "./components/MainBody/MainBody";
import "bootstrap/dist/css/bootstrap.min.css";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient, InMemoryCache } from "@apollo/client";
const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App text-left">
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="/">Travel</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#features" disabled>
              Features
            </Nav.Link>
          </Nav>
        </Navbar>

        <div className="container-sm">
          <MainBody />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
