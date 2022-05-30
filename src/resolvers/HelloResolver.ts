import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { User } from "../entity/user.entity"

@Resolver()
export class HelloResolver {

    @Query(() => [User])
    async getUsers() {
        return await User.find()
    }
}