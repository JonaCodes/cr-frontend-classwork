import { useState } from "react";
import HeaderView from "./HeaderView";
import MessageView from "./MessageView";
import HistoryView from "./HistoryView";
import "./ex6.css";

const randInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default function Ex6() {
  const [secret] = useState(() => randInt(1, 100));
  const [guessText, setGuessText] = useState("");
  const [message, setMessage] = useState("Guess a number from 1 to 100.");
  const [tries, setTries] = useState(0);
  const [history, setHistory] = useState<number[]>([]);
  const [won, setWon] = useState(false);

  const submitGuess = () => {
    const guessNumber = Number(guessText);

    setTries((latestTries) => latestTries + 1);
    setHistory((latestHistory) => [guessNumber, ...latestHistory]);

    if (guessNumber === secret) {
      setMessage("Correct! 🎉");
      setWon(true);
    } else if (guessNumber < secret) {
      setMessage("Too low.");
    } else {
      setMessage("Too high.");
    }

    setGuessText("");
  };

  const renderGuessInput = () => {
    return (
      <input
        autoFocus
        type="number"
        className="input"
        value={guessText}
        onChange={(e) => setGuessText(e.target.value)}
        placeholder="Input your guess"
        onKeyDown={(e) => {
          if (e.key === "Enter") submitGuess();
        }}
      />
    );
  };

  const renderActions = () => {
    return (
      <>
        <button
          className="btn primary"
          onClick={submitGuess}
          disabled={won || !guessText}
        >
          Guess
        </button>
      </>
    );
  };

  return (
    <div className="game">
      <div className="card">
        <HeaderView tries={tries} />

        <div className="row">{renderGuessInput()}</div>
        <div className="actions">{renderActions()}</div>

        <MessageView message={message} />
        <HistoryView history={history} />
      </div>
    </div>
  );
}
