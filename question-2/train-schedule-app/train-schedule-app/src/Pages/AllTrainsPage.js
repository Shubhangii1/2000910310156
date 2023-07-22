import React from 'react';
import TrainList from '../componnets/TrainList';
import { trainsData } from '../data/trains';

function AllTrainsPage({ onSelectTrain }) {
  return (
    <div>
      <h1 className="mb-4">Trains Schedule</h1>
      <TrainList trains={trainsData} onSelectTrain={onSelectTrain} />
    </div>
  );
}

export default AllTrainsPage;
