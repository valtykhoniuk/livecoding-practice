import React, { useState } from "react";

const Task25 = () => {
  const words = ["apple", "banana", "lime", "orange", "peach"];
  const [sortedWords, setSortedWords] = useState(words);
  const [query, setQuery] = useState("");

  const filterByInput = (word) => {
    setQuery(word);
    setSortedWords(words.filter((part) => part.includes(word)));
  };

  return (
    <div>
      <h1>Task 25</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => filterByInput(e.target.value)}
      ></input>
      {sortedWords.map((sortedWord, index) => (
        <p key={index}>{sortedWord}</p>
      ))}
    </div>
  );
};

export default Task25;
