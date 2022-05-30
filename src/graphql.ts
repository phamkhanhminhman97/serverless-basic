import "reflect-metadata";
import { createConnection } from "typeorm";
import { ApolloServer, gql } from "apollo-server-lambda";
import { createSchema } from "./utils/createSchema";

import { resolvers } from '../src/resolvers/hello';
import { typeDefs } from './typedef';



// const apolloServer = new ApolloServer({ resolvers, typeDefs });
const connectToDb: any = async () => {
    await createConnection();
}
// export const graphqlHandler = apolloServer.createHandler();

export const graphqlHandler2 = async (event, context, callback) => {
    let connection = true;
    try {
        // await createConnection();
        let migrateRequired = false
        if (!connection) {
            connection = await connectToDb()
            migrateRequired = true
        }
        //connect apollo server
        const schema = await createSchema();
        const apolloServer = new ApolloServer({ schema });
        const handle = apolloServer.createHandler()

        return handle(event, context, callback)
    } catch (error) {
        console.log('ERROR');
        console.log(error);

    }
};
