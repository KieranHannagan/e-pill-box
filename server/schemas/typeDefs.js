const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    medicationCount: Int
    medications: [Medication]
  }

  type Medication {
    _id: ID
    drugName: String
    lastFill: String
    daySupply: Int
    pharmacy: Pharmacy
  }

  type Pharmacy {
    _id: ID
    pharmacyName: String
    pharmacyPhone: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    medications(username: String): [Medication]
    medication(_id: ID!): Medication
  }


`;

module.exports = typeDefs;
