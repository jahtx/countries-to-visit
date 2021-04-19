import React, { useState } from "react";
import axios from "axios";
import { ApolloConsumer, gql, useQuery } from "@apollo/client";
import Form from "react-bootstrap/Form";
import "./mainbody.scss";
const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      code
      name
      capital
    }
  }
`;

const MainBody = () => {
  // using hooks in a functional component
  const [name, setName] = useState("");

  const [background, setBackground] = useState("");

  const handleNameInput = (e) => {
    const value = e.target.value;
    setName(value);
    axios
      .get(
        `https://api.unsplash.com/search/photos/?page=1&per_page=10&query=${value}&client_id=${"jAOelm8-YvrFW2mKMR2cuHT1HtF-XexMgcHFQ5nkzoo"}`
      )
      .then((data) => {
        data.data.results[0]
          ? setBackground(data.data.results[0].urls.regular)
          : console.log("no data");
      });
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
              <Form.Label>Select a Country</Form.Label>
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

          <div className="postcard-container">
            <div className="postcard-back-redone">
              <div
                className="postcard-pict-redone"
                style={{
                  backgroundImage: `url(${background})`,
                }}
              >
                {name ? (
                  <span className="inset">Wish you were here!</span>
                ) : (
                  <span className="inset">Select a country</span>
                )}
              </div>

              {name ? (
                <div className="justVisiting">
                  Just visiting the city of {name} and thought I would say
                  hello!
                </div>
              ) : null}
            </div>
          </div>
        </div>
      )}
    </ApolloConsumer>
  );
};

export default MainBody;
