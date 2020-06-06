const { ApolloServer } = require('apollo-server');
const typeDefs = require ('./schema');

const server = new ApolloServer({ typeDefs });

const PORT = 4010;

server.listen(PORT).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});