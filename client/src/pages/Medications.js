import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect, useParams } from 'react-router-dom';

import { useQuery, useMutation } from '@apollo/client';
// import { useQuery } from '@apollo/client';

import { QUERY_ME } from '../utils/queries';
import { ADD_MEDICATION, REMOVE_MEDICATION } from '../utils/mutations';
// import Auth from '../utils/auth';

const Medications = () => { 
    const { loading, data } = useQuery(QUERY_ME);
    const [deleteMedication, { error }] = useMutation(REMOVE_MEDICATION);

    const medications = data?.me.medications || [];

    if (loading) {
        return <div>Loading...</div>;
      }
    
    if (!medications.length) {
        return <h3>No Medications Yet</h3>;
    }

    const handleDelete = async (drugId) => {     
        
        try {
            const { data } = await deleteMedication({
                variables: { drugId }
            });

            if (error) {
                throw new Error('Something went wrong!');
            }
            deleteMedication(drugId);
        } catch (err) {
            console.error(err);
        }


    };

    return (
        <main>  
            <h1>{data.me.username}'s Medications</h1>
            {medications.map(medication => (
                <div key={medication._id} className='card'>
                    <h3>{medication.drugName}</h3>
                    <h5>Pharmacy Name: <span>{medication.pharmacyName}</span></h5>
                    <h5>Pharmacy Phone: <span>{medication.pharmacyPhone}</span></h5>
                    <h5>Day Supply: <span>{medication.daySupply}</span></h5>
                    <h5>Last Fill Date: <span>{medication.lastFill}</span></h5>
                    {/* <button onClick={() => handleDelete(medication._id)}>Delete Medication</button> */}
                </div>
            ))}
            {/* <button>Add Medication</button>  */}
        </main>
    );
};

export default Medications;
