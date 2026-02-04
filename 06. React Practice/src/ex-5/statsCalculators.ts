import { IGNORED_WORDS } from "./ignoredWords";

export const countWords = (text: string) => {
  if (text.trim() === "") return 0;
  return text.trim().split(/\s+/).length;
};

export const countCharacters = (text: string) => {
  return text.length;
};

export const findMostCommonWord = (text: string) => {
  if (text.trim() === "") return "—";

  const words = text.toLowerCase().match(/\b\w+\b/g) || [];
  const wordCounts: { [key: string]: number } = {};

  words.forEach((word) => {
    if (IGNORED_WORDS.includes(word)) return;
    wordCounts[word] = (wordCounts[word] || 0) + 1;
  });

  let mostCommon = "";
  let maxCount = 0;

  for (const word in wordCounts) {
    if (wordCounts[word] > maxCount) {
      maxCount = wordCounts[word];
      mostCommon = word;
    }
  }

  return mostCommon;
};

export const countSentences = (text: string) => {
  if (text.trim() === "") return 0;
  const sentences = text.match(/[.!?]+/g);
  return sentences ? sentences.length : 0;
};

export const calculateAverageSentenceLength = (text: string) => {
  const sentences = countSentences(text);
  if (sentences === 0) return 0;

  const words = countWords(text);
  return Math.round(words / sentences);
};
