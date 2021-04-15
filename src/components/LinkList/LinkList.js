import React from "react";
import Link from "../Link/Link";
import { gql, useQuery } from "@apollo/client";
import { ApolloConsumer } from "@apollo/client";

const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      name
      capital
    }
  }
`;

const LinkList = () => {
  const { loading, error, data } = useQuery(GET_COUNTRIES, {
    variables: { limit: 5 },
  });
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;
  return (
    <ApolloConsumer>
      {(client) =>
        data.countries.map((country) => (
          <Link key={country.id} country={country} />
        ))
      }
    </ApolloConsumer>
  );
};

export default LinkList;
