import React from "react";
// import Link from "../Link/Link";
// import { gql, useQuery } from "@apollo/client";
import { ApolloConsumer } from "@apollo/client";

const LinkList = () => {
  return (
    <ApolloConsumer>
      {(client) => "We have access to the client!" /* do stuff here */}
    </ApolloConsumer>
  );
};

export default LinkList;
