"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.graphqlHandler2 = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const apollo_server_lambda_1 = require("apollo-server-lambda");
const createSchema_1 = require("./utils/createSchema");
// const apolloServer = new ApolloServer({ resolvers, typeDefs });
const connectToDb = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, typeorm_1.createConnection)();
});
// export const graphqlHandler = apolloServer.createHandler();
const graphqlHandler2 = (event, context, callback) => __awaiter(void 0, void 0, void 0, function* () {
    let connection = false;
    try {
        // await createConnection();
        let migrateRequired = false;
        if (!connection) {
            connection = yield connectToDb();
            migrateRequired = true;
        }
        //connect apollo server
        const schema = yield (0, createSchema_1.createSchema)();
        const apolloServer = new apollo_server_lambda_1.ApolloServer({ schema });
        const handle = apolloServer.createHandler();
        return handle(event, context, callback);
    }
    catch (error) {
        console.log('ERROR');
        console.log(error);
    }
});
exports.graphqlHandler2 = graphqlHandler2;
//# sourceMappingURL=graphql.js.map