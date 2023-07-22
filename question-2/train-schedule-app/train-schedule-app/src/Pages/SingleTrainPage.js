import React from 'react';
import SingleTrain from '../componnets/SingleTrain';
import { trainsData } from '../data/trains';

function SingleTrainPage({ match }) {
  const trainId = parseInt(match.params.id);
  const train = trainsData.find((train) => train.id === trainId);

  return (
    <div>
      {train ? (
        <SingleTrain train={train} />
      ) : (
        <p>Train with ID {trainId} not found.</p>
      )}
    </div>
  );
}

export default SingleTrainPage;
