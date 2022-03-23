import { gql } from '@apollo/client'

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($username: String!, $email: String!, $password: String!) {
        addUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
                email
            }
        }
    }
`;

export const ADD_MEDICATION = gql`
    mutation addMedication($drugName: String!, $lastFill: String, $daySupply: String, $pharmacyName: String, $pharmacyPhone: String) {
        addMedication(drugName: $drugName, lastFill: $lastFill, daySupply: $daySupply, pharmacyName: $pharmacyName, pharmacyPhone: $pharmacyPhone) {
            _id
            drugName
            pharmacyName
            pharmacyPhone
            daySupply
            lastFill            
        }
    }
`;

export const REMOVE_MEDICATION = gql`
    mutation removeMedication($drugId: ID!) {
        removeMedication(drugId: $drugId) {
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

export const EDIT_DRUG = gql`
    mutation editDrug($drugId: ID!, $daySupply: Int!, $lastFill: String!) {
        editDrug(drugId: $drugId, daySupply: $daySupply, lastFill: $lastFill) {
            _id
            drugName
            pharmacyName
            pharmacyPhone
            daySupply
            lastFill
        }
    }
`;

export const EDIT_PHARMACY = gql`
    mutation editPharmacy($drugId: ID!, $pharmacyName: String!, $pharmacyPhone: String!) {
        editPharmacy(drugId: $drugId, pharmacyName: $pharmacyName, pharmacyPhone: $pharmacyPhone) {
            _id
            drugName
            pharmacyName
            pharmacyPhone
            daySupply
            lastFill
        }
    }
`;
