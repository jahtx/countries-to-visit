import React from "react";
import Link from "../Link/Link";
import { gql, useQuery } from "@apollo/client";
import { ApolloClient, ApolloConsumer } from "@apollo/client";

// const FEED_QUERY = gql`
//   query FeedQuery {
//     getCityByName(name: "Dallas") {
//       id
//       name
//       country
//       coord {
//         lon
//         lat
//       }
//       weather {
//         summary {
//           title
//           description
//           icon
//         }
//         temperature {
//           actual
//           feelsLike
//           min
//           max
//         }
//         wind {
//           speed
//           deg
//         }
//         clouds {
//           all
//           visibility
//           humidity
//         }
//         timestamp
//       }
//     }
//   }
// `;
const GET_CITIES = gql`
  query GetCities {
    getCityByName(name: "Dallas") {
      id
      name
      country
      weather {
        summary {
          title
        }
      }
    }
  }
`;

const LinkList = () => {
  const { loading, error, data } = useQuery(GET_CITIES, {
    variables: { limit: 5 },
  });
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error!</div>;
  return <ApolloConsumer>{(client) => JSON.stringify(data)}</ApolloConsumer>;
};

export default LinkList;
