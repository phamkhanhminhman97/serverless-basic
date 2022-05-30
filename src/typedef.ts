
// import { HelloResolver } from './resolvers/hello';
import { gql } from "apollo-server-lambda";

export const typeDefs = gql`
  type Query {
    testMessage: String
  }
`;
