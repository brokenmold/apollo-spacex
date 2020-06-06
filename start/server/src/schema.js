import { qpl } from 'apollo-server';

const typeDefs = gpl`
  type Launch {
    id: ID!
    site: String
    mission: Mission
    rocket: Rocket
    isBooked: Boolean!
  }
`

module.exports = typeDefs;