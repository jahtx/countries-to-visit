import React from "react";
import "./styles/main.scss";
import MainBody from "./components/MainBody/MainBody";
import "bootstrap/dist/css/bootstrap.min.css";
import { ApolloProvider } from "@apollo/react-hooks";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import Header from "./components/Header/Header";
const client = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
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
    </ApolloProvider>
  );
}

export default App;
