import React, { useEffect, useState } from 'react';
import './App.css';
const ls = require('localstorage-ttl');

function App() {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const chars = ls.get(characters);
    if (chars === null) {
      fetch('https://swapi.co/api/people')
        .then(response => response.json())
        .then(data => {
          console.log("fetch")
          setCharacters(data.results)
          ls.set(characters, data.results)
        });
    } else {
      console.log("ls")
      setCharacters(chars)
    }
    // eslint-disable-next-line
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
