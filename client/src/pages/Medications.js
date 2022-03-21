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
                    <h3><Link
                      to={`medication/${medication.drugName}`}
                      className="">
                    {medication.drugName}</Link></h3>
                    <button onClick={() => handleDelete(medication._id)}>Delete Medication</button>
                </div>
            ))}
            <button>Add Medication</button> 
        </main>
    );
};

export default Medications;
