import React, { useState, useEffect } from 'react';
import './App.css';
import Team from './Components/Team/Team';
import Wrestler from './Components/Wrestler/Wrestler';
import wrestlerData from './data/data.json';
import '../src/Components/Team/Team.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFistRaised } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [wrestlers, setWrestlers] = useState([]);


  useEffect(() => {
    setWrestlers(wrestlerData);
    // console.log(wrestlerData);
    //const name = wrestlerData.map(wrestlers  => wrestlers.name);
    //console.log(names);
  }, [])

  const [team, setTeam] = useState([]);
  const handleAddWrestler = (wrestler) => {
    const newTeam = [...team, wrestler];
    setTeam(newTeam);
  };


  return (
    <div className="App">
      <h1 style={{color: 'white', padding: '10px', backgroundColor: 'black'}}><FontAwesomeIcon icon={faFistRaised} /><br></br>Extreme Championship Wrestling</h1>
      <h2>Total Wrestlers: <span style={{color: 'blue'}}>{wrestlers.length}</span></h2>
      <h3>Total Team Member: {team.length}</h3>

      <div className="playerContainer">
        <div>
          {
            wrestlers.map(wrestlers => <Wrestler wrestlers={wrestlers} handleAddWrestler={handleAddWrestler} wrestler={wrestlers}></Wrestler>)
          }
        </div>
        <div className="teamInfo">
          <Team team={team}></Team>
        </div>
      </div>
    </div>
  );
}

export default App;
