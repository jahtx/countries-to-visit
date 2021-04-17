import React from "react";
import "./styles/main.scss";
import globe from "./images/spinning-globe.gif";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import LinkList from "./components/LinkList/LinkList";
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
          <Navbar.Brand href="/">Oh The Places You'll Go!</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#features" disabled>
              Features
            </Nav.Link>
          </Nav>
        </Navbar>

        <div className="container-sm mt-3">
          <img
            src={globe}
            className="pocketSizeImage"
            alt="gratuitiously spinning globe"
          />
        </div>
        <div className="container-sm">
          <h4>Countries to Visit:</h4>
          <LinkList />
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;
