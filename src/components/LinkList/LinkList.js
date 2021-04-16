import React, { useState } from "react";
import { ApolloConsumer, gql, useQuery } from "@apollo/client";
import Form from "react-bootstrap/Form";
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
          <Form>
            <Form.Group>
              <Form.Label>Country to Visit</Form.Label>
              <Form.Control
                id="country-selection"
                onChange={handleNameInput}
                as="select"
                size="sm"
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
              <span>
                You should visit the capital, which is &nbsp;"
                {name}".{" "}
              </span>
            ) : null}
          </div>
        </div>
      )}
    </ApolloConsumer>
  );
};

export default LinkList;
