const { ApolloServer } = require('apollo-server');
const typeDefs = require ('./schema');
const { createStore } = require('./utils');

const LaunchAPI = require('./datasources/launch');
const UserAPI = require('./datasources/user');

const store = createStore();

const server = new ApolloServer({ 
    typeDefs,
    introspection: true,
    playground: true,
    dataSources: () => ({
        launchAPI: new LaunchAPI(),
        userAPI: new UserAPI({ store }),
    })
});

const PORT = 4010;

server.listen(PORT).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});