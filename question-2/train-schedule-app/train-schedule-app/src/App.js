import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import AllTrainsPage from './Pages/AllTrainsPage';
import SingleTrainPage from './Pages/SingleTrainPage';

function App() {
  const [currentRoute, setCurrentRoute] = React.useState(null);

  const handleRouteChange = (route) => {
    setCurrentRoute(route);
  };

  return (
    <Router>
      <div className="container mt-4">
        <nav className="mb-4">
          <ul className="nav nav-pills">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                All Trains
              </Link>
            </li>
          </ul>
        </nav>

        {currentRoute === null ? (
          <AllTrainsPage onSelectTrain={handleRouteChange} />
        ) : (
          <SingleTrainPage match={{ params: { id: currentRoute } }} />
        )}
      </div>
    </Router>
  );
}

export default App;
