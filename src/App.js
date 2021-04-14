import React from "react";
import "./styles/main.scss";
import globe from "./images/spinning-globe.gif";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import LinkList from "./components/LinkList/LinkList";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App text-left">
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="/">Oh The Places You'll Go!</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Navbar>
      {/* <div className="container-sm mt-3">
        "I'm going where the sun keeps shinin', Through the pouring rain"
      </div> */}

      <div className="container-sm mt-3">
        <img
          src={globe}
          className="pocketSizeImage"
          alt="gratuitiously spinning globe"
        />
      </div>
      <div className="container-sm">
        <h4>Places where the weather suits your clothes:</h4>
      </div>
      <div className="container-sm">
        <LinkList />
      </div>
    </div>
  );
}

export default App;
