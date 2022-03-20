import React from 'react';
import { Redirect, useParams } from 'react-router-dom';

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_MEDICATIONS } from '../utils/queries';
import { ADD_MEDICATION, REMOVE_MEDICATION } from '../utils/mutations';
import Auth from '../utils/auth';

const Medications = () => { 
    const { loading, data } = useQuery(QUERY_ME);

    if (loading) {
        return <div>Loading...</div>;
      }

    if (!data.medications.length) {
        return <h3>No Medications Yet</h3>;
    }

    return (
        <main>
            {data.medications}
            
        </main>
    );
};

export default Medications;
