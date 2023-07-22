// I have made this for displaying single train status other than the list of the trains
import React from 'react';
import { Link } from 'react-router-dom';

function SingleTrain({ train }) {
  return (
    <div>
      <h2>{train.name}</h2>
      <p>Departure: {train.departure}</p>
      <p>Arrival: {train.arrival}</p>
      <p>From: {train.from}</p>
      <p>To: {train.to}</p>
{/* I have used this link so that we can go back to the All list of the train pages */}
      <Link to="/">Back to All Trains</Link>
    </div>
  );
}

export default SingleTrain;
