// import InputBox from "../compoenent/InputBox";
import { useEffect, useState } from "react";
// import { Meaning } from "../components/Meaning";
// import { v4 as uuidv4 } from "uuid";
import { useParams, useNavigate, Link } from "react-router-dom";

const Definition = () => {
  const [wordData, setWordData] = useState([]);
  const { search } = useParams();
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`;
  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
          setWordData(data[0]);
      })
      .catch((e) => {
        console.error("Error fetching data:", e);
        setWordData(null); // Set to null on error to show loading state
      });
  }, []);

  return (
    <div>
      {wordData.length > 0 ? (
        <>
          <h1>{wordData.word}</h1>

          <section>
            <h2>Phonetics</h2>
            {wordData.phonetics.map((phonetic, index) => (
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
            ))}
          </section>

          <section>
            <h2>Meanings</h2>
            {wordData.meanings.map((meaning, index) => (
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
                    <p>Synonyms: {meaning.synonyms.join(", ")}</p>
                  </div>
                )}
                {meaning.antonyms.length > 0 && (
                  <div>
                    <p>Antonyms: {meaning.antonyms.join(", ")}</p>
                  </div>
                )}
              </div>
            ))}
          </section>

          <section>
            <h2>Source</h2>
            {wordData.sourceUrls.map((url, index) => (
              <p key={index}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  {url}
                </a>
              </p>
            ))}
          </section>
        </>
      ) : null}
    </div>
  );
};

export default Definition;
