import { gql } from '@apollo/client';

export const QUERY_ME = gql`
    query me{
        me {
          _id
          username
          medicationCount
          medications {
              _id
              drugName
              pharmacyName
              pharmacyPhone
              daySupply
              lastFill
            }
        }
    }
`;

export const QUERY_MEDICATIONS = gql`
    query medications($username: String) {
        medications(username: $username) {
          _id
          username
          medicationCount
          medications {
              _id
              drugName
              pharmacyName
              pharmacyPhone
              daySupply
              lastFill
            }
        }
    }
`;

export const QUERY_MEDICATION = gql`
    query medication($id: ID!) {
        _id
        drugName
        pharmacyName
        pharmacyPhone
        daySupply
        lastFill
    }
`;