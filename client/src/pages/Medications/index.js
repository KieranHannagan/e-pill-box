import React from 'react';
import { Link } from 'react-router-dom';

const MedicationList = ({ medications, title }) => {
  if (medications.length) {
    return <h3>Medication List </h3>;
  }


  return (
    <div>
      <h3>{title}</h3>
      {medication &&
        medications.map(medication => (
          <div key={thought._id} className="card mb-3">
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
              <Link to={`/thought/${Medication._id}`}>
                <p>{medications.medicationText}</p>
                <p className="mb-0">
                  Pharmacy: {thought.reactionCount} || Click to{' '}
                  {thought.reactionCount ? 'see' : 'start'} the discussion!
                </p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MedicationList;

