import * as React from "react";
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
  /** Function that will set different values to variable
   * based on which dropdown is selected
   */
  const changeSelectOptionHandler = (event) => {
    document.getElementById("capitalText").innerHTML = document.getElementById(
      "country-selection"
    ).value;
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
                onChange={changeSelectOptionHandler}
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
            You should visit the capital, which is &nbsp;"
            <span id="capitalText"></span>".
          </div>
        </div>
      )}
    </ApolloConsumer>
  );
};

export default LinkList;
