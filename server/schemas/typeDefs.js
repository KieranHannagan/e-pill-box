const { gql } = require("apollo-server-express");

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
    medications(username: String): User
    medication(_id: ID!): Medication
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addMedication(drugName: String!, lastFill: String, daySupply: String, pharmacyName: String, pharmacyPhone: String): Medication
    removeMedication(drugId: ID!): User
    editDrug(drugId: ID!, lastFill: String!, daySupply: Int!): Medication
    editPharmacy(drugId: ID!, pharmacyName: String!, pharmacyPhone: String!): Medication
  }
`;

module.exports = typeDefs;
