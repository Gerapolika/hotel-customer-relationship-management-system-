import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './App.css';

function App() {
  
  const rooms = useSelector(state => state.rooms.rooms);
  const accounts = useSelector(state => state.accounts.accounts);

  
  useEffect(() => {
    console.log(rooms, accounts)
  }, [rooms, accounts])

  return (
    <div className="App">
    </div>
  );
}

export default App;
