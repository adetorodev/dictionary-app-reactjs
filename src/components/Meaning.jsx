/* eslint-disable react/prop-types */
export const Meaning = (props) => {
  const audio = new Audio(props.phonetic);
  const handleClick = () => {
    audio.play();
  };

  return (
    <div>
      <h2>{props.word}</h2>
      {props.phonetic && (
        <svg
          onClick={handleClick}
          className="w-6 h-6 text-gray-800 dark:text-white cursor-pointer"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15.5 8.43A4.985 4.985 0 0 1 17 12c0 1.126-.5 2.5-1.5 3.5m2.864-9.864A8.972 8.972 0 0 1 21 12c0 2.023-.5 4.5-2.5 6M7.8 7.5l2.56-2.133a1 1 0 0 1 1.64.768V12m0 4.5v1.365a1 1 0 0 1-1.64.768L6 15H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1m1-4 14 14"
          />
        </svg>
      )}

      <p className="mb-3 text-gray-400 dark:text-gray-300">{props.partOfSpeech}</p>
      <p className="mb-3 text-gray-600 dark:text-gray-600 font-semibold">{props.meaning}</p>
      {props.example && (
        <>
          <p className="mb-3 text-gray-400 dark:text-gray-300">Example</p>
          <p className="mb-3 text-gray-500 dark:text-gray-400 font-semibold">{props.example}</p>
        </>
      )}
      {props.synonyms && props.synonyms.length > 0 && (
        <>
          <p className="mb-3 text-gray-400 dark:text-gray-300">Synonyms</p>
          <p className="mb-3 text-gray-600 dark:text-gray-600">{props.synonyms.join(', ')}</p>
        </>
      )}
    </div>
  );
};
