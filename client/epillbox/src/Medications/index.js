import React from 'react';
import { Link } from 'react-router-dom';

const MedicationList = ({ medications, title }) => {
  if (medications.length) {
    return <h3>Medication List </h3>;
  }


  return (
    <div>
      {/* <h3>{title}</h3>
      {medication &&
        medications.map(medication => (
          <div key={drug._id} className="card mb-3">
            <p className="card-header">
              <Link
                to={`/profile/${medication.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {medication.username}
              </Link>{' '}
              Medication{medication.createdAt}
            </p>
            <div className="card-body">
              <Link to={`medication/${Medication._id}`}>
                <p>{medications.medicationText}</p>
                
              </Link>
            </div>
          </div>
        ))} */}
    </div>
  );
};

export default MedicationList;

