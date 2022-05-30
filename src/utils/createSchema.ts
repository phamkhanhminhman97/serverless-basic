import { buildSchema } from "type-graphql";
import { HelloResolver } from "../resolvers/HelloResolver";

export const createSchema = async () => {
    return await buildSchema({
        resolvers: [
            HelloResolver, 
        ]
    });
}