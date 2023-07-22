// This is for all the trains we have used I have used only two trains due to time constraint
import React from 'react';

function TrainList({ trains, onSelectTrain }) {
  return (
    <div>
      <h2 className="mb-3">All Trains</h2>
      <ul className="list-group">
        {trains.map((train) => (
          <li
            key={train.id}
            className="list-group-item list-group-item-action"
            onClick={() => onSelectTrain(train.id)}
          >
            {train.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrainList;
