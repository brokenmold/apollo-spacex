const { ApolloServer } = require('apollo-server');
const typeDefs = require ('./schema');

const server = new ApolloServer({ 
    typeDefs,
    introspection: true,
    playground: true,
});

const PORT = 4010;

server.listen(PORT).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});