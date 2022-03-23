import React, { useState } from "react";
import { Redirect } from "react-router-dom";
//import PopUp from "./addMedication"; 
import { Container, Badge } from 'react-bootstrap';

import { useQuery, useMutation } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { ADD_MEDICATION } from '../utils/mutations';
import Auth from "../utils/auth";

const Profile = (props) => {
  const [formState, setFormState] = useState({
    drug_name: "",
    last_fill: "",
    day_supply: "",
    pharmacy_name: "",
    pharmacy_phone: ""
  });
  const [addMedication, { error }] = useMutation(ADD_MEDICATION, {
    variables: { drugName : formState.drug_name, lastFill : formState.last_fill, daySupply : formState.day_supply, pharmacyName : formState.pharmacy_name, pharmacyPhone : formState.pharmacy_phone }
  })

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addMedication({
        variables: { ...formState },
      });
      console.log(data)
      setFormState({
        drug_name: "",
        last_fill: "",
        day_supply: "",
        pharmacy_name: "",
        pharmacy_phone: ""
      });
    } catch (e) {
      console.error(e);
    }
  };

  const { loading, data } = useQuery(QUERY_ME);
  const myMedications = data?.me.medications || [];
  console.log(myMedications)
  // redirect to homepage if not logged in
  if (!Auth.loggedIn()) {
    return <Redirect to="/" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="App">
      <br>
      </br>
        <Container className='profile'>
          <h1>
        <Badge className="lg-6" pill bg="secondary" text='warning'>
              ePillbox
            </Badge>{' '}
            </h1>
            <br />
            <h2>Profile</h2>
            <h3>Medications List:</h3>
            <div>{myMedications.map((myMedication)=>{
                return <div key={myMedication._id} className="card">
                <h4 className="card-header">{`${myMedication.drugName}`}</h4>
                <div className="card-body">{`Pharmacy Name: ${myMedication.pharmacyName}`}</div>
                </div>
                })}
              </div>
      <div className="col-12 col-md-6">
        <div className="card">
          <h4 className="card-header">Add Medication</h4>
          <div className="card-body">
            <form onSubmit={handleFormSubmit}>
              <input
                className="form-input"
                placeholder="Name of Medication"
                name="drug_name"
                type="drug_name"
                id="drug_name"
                value={formState.drug_name}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="Last Fill Date"
                name="last_fill"
                type="text"
                id="last_fill"
                value={formState.last_fill}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="Day Supply"
                name="day_supply"
                type="text"
                id="day_supply"
                value={formState.day_supply}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="Pharmacy Name"
                name="pharmacy_name"
                type="text"
                id="pharmacy_name"
                value={formState.pharmacy_name}
                onChange={handleChange}
              />
                <input
                className="form-input"
                placeholder="Pharmacy #"
                name="pharmacy_phone"
                type="text"
                id="pharmacy_phone"
                value={formState.pharmacy_phone}
                onChange={handleChange}
              />
              <button className="btn d-block w-100" type="submit">
                Submit
              </button>
            </form>

            {error && <div>Medication failed to submit</div>}
          </div>
        </div>
      </div>
        </Container>
        <br />
        <br />
    </section >
  )
};

export default Profile;
