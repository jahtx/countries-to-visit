import React from "react";
import "./styles/main.scss";
import MainBody from "./components/MainBody/MainBody";
import "bootstrap/dist/css/bootstrap.min.css";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
const client = new ApolloClient({
  uri: "https://apollo-server-countries-vokuu.ondigitalocean.app/",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <div className="App text-left">
        <div className="container-sm">
          <MainBody />
        </div>
      </div>
      <div className="container-sm text-center">
        Country images made possible by
        <a id="unsplash-link" href="https://unsplash.com">
          Unsplash
        </a>
        .
      </div>
      <Footer />
    </ApolloProvider>
  );
}

export default App;
