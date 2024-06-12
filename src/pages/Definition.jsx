// import InputBox from "../compoenent/InputBox";
import { useEffect, useState } from "react";
import { Meaning } from "../compoenent/Meaning";

const Definition = () => {
  const [word, setWord] = useState("");
  //   const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/hello`;
  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Netwoek is not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setWord(data[0]);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      <Meaning />
    </>
  );
};

export default Definition;
