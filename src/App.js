import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    fetch('https://swapi.co/api/people')
      .then(response => response.json())
      .then(data => setCharacters(data.results));
  }, [])
  console.log(characters)
  return (
    <>
      <h2>Characters</h2>
      <ul>
        {characters.map(char =>
          <li key={char.name}>
            {char.name}
          </li>
        )}
      </ul>
    </>
  );
}

export default App;
