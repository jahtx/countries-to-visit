import React, { useState } from "react";
import axios from "axios";
import { ApolloConsumer, gql, useQuery } from "@apollo/client";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import { Card } from "react-bootstrap";
import "./linklist.scss";
const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      code
      name
      capital
    }
  }
`;

const LinkList = () => {
  // using hooks in a functional component
  const [name, setName] = useState("");

  const [background, setBackground] = useState("");

  const handleNameInput = (e) => {
    setName(e.target.value);
    const query = e.target.value;
    axios
      .get(
        `https://api.unsplash.com/search/photos/?page=1&per_page=10&query=${query}&client_id=${"jAOelm8-YvrFW2mKMR2cuHT1HtF-XexMgcHFQ5nkzoo"}`
      )
      .then((data) => {
        data.data.results[0]
          ? setBackground(data.data.results[0].urls.regular)
          : console.log("huh");
      });
  };

  const performSearch = (e) => {
    console.log(e.target.value);
    // axios
    //   .get(
    //     `https://api.unsplash.com/search/photos/?page=1&per_page=10&query=${query}&client_id=${"jAOelm8-YvrFW2mKMR2cuHT1HtF-XexMgcHFQ5nkzoo"}`
    //   )
    //   .then((data) => {
    //     console.log(data.data.results[1]);
    //   });
  };

  //performSearch();

  const { loading, error, data } = useQuery(GET_COUNTRIES, {
    variables: { limit: 5 },
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;

  return (
    <ApolloConsumer>
      {(client) => (
        <div>
          <Jumbotron
            fluid
            className="jumbo"
            style={{
              backgroundImage: `url(${background})`,
            }}
          >
            <Container className="jumbo-container"></Container>
          </Jumbotron>
          <Form>
            <Form.Group>
              <Form.Label>Select</Form.Label>
              <Form.Control
                id="country-selection"
                onChange={handleNameInput}
                as="select"
                size="lg"
                custom
              >
                {data.countries.map((country) => (
                  <option key={country.code} value={country.capital}>
                    {country.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form>
          <div>
            {name ? (
              <Card bg="dark text-light">
                <Card.Body>
                  You should visit the capital, which is &nbsp;
                  <strong>{name}</strong>.
                </Card.Body>
              </Card>
            ) : null}
          </div>
          <br />
          <Button variant="primary" onClick={performSearch}>
            Primary
          </Button>{" "}
        </div>
      )}
    </ApolloConsumer>
  );
};

export default LinkList;
