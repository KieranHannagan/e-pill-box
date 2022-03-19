import React from 'react';
import { Redirect, useParams } from 'react-router-dom';

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_MEDICATIONS } from '../utils/queries';
import { ADD_MEDICATION, REMOVE_MEDICATION } from '../utils/mutations';
import Auth from '../utils/auth';

const Medications = () => { 
    return (
        <main>
            
        </main>
    );
};

export default Medications;
