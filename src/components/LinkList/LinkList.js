import React, { useState } from "react";
import { ApolloConsumer, gql, useQuery } from "@apollo/client";
import Form from "react-bootstrap/Form";
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

  const handleNameInput = (e) => {
    setName(e.target.value);
  };

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
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "./images/mountains.jpg"
              })`,
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
        </div>
      )}
    </ApolloConsumer>
  );
};

export default LinkList;
