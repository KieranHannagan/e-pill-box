import React from 'react';
import { Link } from 'react-router-dom';
// import { Redirect, useParams } from 'react-router-dom';

// import { useQuery, useMutation } from '@apollo/client';
import { useQuery } from '@apollo/client';

import { QUERY_ME } from '../utils/queries';
// import { ADD_MEDICATION, REMOVE_MEDICATION } from '../utils/mutations';
// import Auth from '../utils/auth';

const Medications = () => { 
    const { loading, data } = useQuery(QUERY_ME);
    const medications = data?.me.medications || [];

    if (loading) {
        return <div>Loading...</div>;
      }

    console.log(data.me.medications);
    
    if (!medications.length) {
        return <h3>No Medications Yet</h3>;
    }

    return (
        <main>  
            <h1>{data.me.username}'s Medications</h1>
            {medications.map(medication => (
                <div className='card'>
                    <h3><Link
                      to={`medication/${medication.drugName}`}
                      className="">
                    {medication.drugName}</Link></h3>
                    <button>Delete Medication</button>
                </div>
            ))}
            <button>Add Medication</button> 
        </main>
    );
};

export default Medications;
