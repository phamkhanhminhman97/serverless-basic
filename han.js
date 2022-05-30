'use strict';
const { ApolloServer, gql } = require('apollo-server-lambda');

module.exports.hello = async (event) => {
    try {
        // console.log(event);
        console.log('aaa');
      
        
        const apolloServer = new ApolloServer({ typeDefs, resolvers });
       const a = apolloServer.createHandler()
       return a
    //     return new Promise((resolve, reject) => {
    //         a(event, cxt, (err, result) => {
    //           if (err) {
    //               console.log('errrr');
                  
    //             reject(err)
    //           } else {
    //               console.log('result');
                  
    //             //result!.headers = RESPONSE_HEADERS
    //             resolve(result)
    //           }
    //         })
    //       })
    } catch (error) {
        console.log('ERROR');
        console.log(error);
        
    }

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
