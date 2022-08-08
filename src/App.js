

import { useEffect, useState } from 'react';
import './App.css';
import Aside from './Components/Aside';
import Create from './Components/Create';
import Dashboard from './Components/Dashboard';
import Form from './Components/Form';
import SelectCharacter from './Components/SelectCharacter';


function App() {

  const adventureData = [
    { adventure: 'Celebration in hobbintown',character: 'Frodo', origin: 'Craig', destination: 'Ben' },
    { adventure: 'Final Battle',character: 'Legolas', origin: 'Two Towers', destination: 'Gondor' }
    
  ]

  const [newAdventure, setNewAdventure] = useState(adventureData)

  const addAdventure = (adventure) => {
    newAdventure.adventure = adventure
    setNewAdventure([
        ...newAdventure,
        adventure
    ])
}

  

  return (
    <div className="App">
      <h1>Hi, User</h1>
      
      <Aside/>
      <Dashboard></Dashboard>
      <Form addAdventure={addAdventure} key={newAdventure.adventure}></Form>
      <Create adventure={newAdventure} />
      
    </div>
  );
}

export default App;
