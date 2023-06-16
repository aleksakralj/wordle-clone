import englishWordBank from "../dictionaries/english-words.txt";

export const boardDefault = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

export const generateWordSet = async () => {
  let wordSet;
  let todaysWord;

  await fetch(englishWordBank)
    .then((response) => response.text())
    .then((result) => {
      const wordArr = result.split("\n").flatMap((str) => str.split("\r"));
      const filteredWordArr = wordArr.filter(Boolean);
      todaysWord =
        filteredWordArr[Math.floor(Math.random() * filteredWordArr.length)];
      wordSet = new Set(filteredWordArr);
    });

  return { wordSet, todaysWord };
};
