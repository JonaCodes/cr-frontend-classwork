import { useState } from "react";
import Stats from "./Stats";
import {
  countWords,
  countCharacters,
  findMostCommonWord,
  countSentences,
  calculateAverageSentenceLength,
} from "./statsCalculators";
import "./ex5.css";

export default function Ex5() {
  const [text, setText] = useState("");

  return (
    <div className="text-analyzer-page">
      <div className="text-analyzer">
        <h1>Text Analyzer</h1>

        <textarea
          className="text-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Start typing to see statistics..."
          rows={10}
        />

        <Stats
          wordCount={countWords(text)}
          charCount={countCharacters(text)}
          mostCommonWord={findMostCommonWord(text)}
          sentenceCount={countSentences(text)}
          avgSentenceLength={calculateAverageSentenceLength(text)}
        />
      </div>
    </div>
  );
}
