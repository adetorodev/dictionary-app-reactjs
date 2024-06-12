/* eslint-disable react/prop-types */
// import {Button} from "@nextui-org/button";
// import Definition from "./pages/Definition";
// import Definition from "./pages/Definition";
// import Home from "./pages/Home";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

// function App() {
//   return (
//     <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <Route path="/dictionary/:search" element={<Definition />} />
//     </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import { useState } from 'react';

const WordDetails = ({ data }) => {
  if (!data || typeof data !== 'object') {
    return <div>No data available</div>;
  }

  const { word, phonetics = [], meanings = [], sourceUrls = [] } = data;

  return (
    <div>
      <h1>{word}</h1>

      <section>
        <h2>Phonetics</h2>
        {phonetics.length > 0 ? (
          phonetics.map((phonetic, index) => (
            <div key={index}>
              {phonetic.text && <p>Text: {phonetic.text}</p>}
              {phonetic.audio && (
                <div>
                  <p>Audio:</p>
                  <audio controls>
                    <source src={phonetic.audio} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No phonetics available</p>
        )}
      </section>

      <section>
        <h2>Meanings</h2>
        {meanings.length > 0 ? (
          meanings.map((meaning, index) => (
            <div key={index}>
              <h3>Part of Speech: {meaning.partOfSpeech}</h3>
              {meaning.definitions.map((definition, defIndex) => (
                <div key={defIndex}>
                  <p>Definition: {definition.definition}</p>
                  {definition.example && <p>Example: {definition.example}</p>}
                </div>
              ))}
              {meaning.synonyms.length > 0 && (
                <div>
                  <p>Synonyms: {meaning.synonyms.join(', ')}</p>
                </div>
              )}
              {meaning.antonyms.length > 0 && (
                <div>
                  <p>Antonyms: {meaning.antonyms.join(', ')}</p>
                </div>
              )}
            </div>
          ))
        ) : (
          <p>No meanings available</p>
        )}
      </section>

      <section>
        <h2>Source</h2>
        {sourceUrls.length > 0 ? (
          sourceUrls.map((url, index) => (
            <p key={index}>
              <a href={url} target="_blank" rel="noopener noreferrer">{url}</a>
            </p>
          ))
        ) : (
          <p>No source URLs available</p>
        )}
      </section>
    </div>
  );
};

const App = () => {
  const [search, setSearch] = useState('');
  const [wordData, setWordData] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    try {
      setError('');
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`);
      if (!response.ok) {
        throw new Error('Word not found. Please try again.');
      }
      const data = await response.json();
      setWordData(data[0]);
    } catch (err) {
      setError(err.message);
      setWordData(null);
    }
  };

  return (
    <div className="App">
      <h1>Dictionary</h1>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Enter a word"
      />
      <button onClick={handleSearch}>Search</button>
      {error && <p>{error}</p>}
      {wordData && <WordDetails data={wordData} />}
    </div>
  );
};

export default App;
