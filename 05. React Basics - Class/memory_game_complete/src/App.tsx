import { useState } from "react";
import HeaderView from "./HeaderView";
import MessageView from "./MessageView";
import HistoryView from "./HistoryView";
import "./guessGame.css";

function randInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const MIN = 1;
const MAX = 100;

export default function App() {
  const [secret, setSecret] = useState(() => randInt(MIN, MAX));
  const [guessText, setGuessText] = useState("");
  const [message, setMessage] = useState("Guess a number from 1 to 100.");
  const [tries, setTries] = useState(0);
  const [history, setHistory] = useState<number[]>([]);
  const [won, setWon] = useState(false);

  const isValidGuess = () => {
    const guessNumber = Number(guessText);
    const guessValid =
      Number.isFinite(guessNumber) &&
      Number.isInteger(guessNumber) &&
      guessNumber >= MIN &&
      guessNumber <= MAX;
    return guessValid;
  };

  const submitGuess = () => {
    if (!isValidGuess()) {
      setMessage("Enter an integer from 1 to 100.");
      return;
    }

    const guessNumber = Number(guessText);
    setTries((latestTries) => latestTries + 1);
    setHistory((latestHistory) => [guessNumber, ...latestHistory]);

    if (guessNumber === secret) {
      setMessage("Correct! 🎉");
      setWon(true);
    } else if (guessNumber < secret) setMessage("Too low.");
    else setMessage("Too high.");

    setGuessText("");
  };

  const reset = () => {
    setSecret(randInt(MIN, MAX));
    setGuessText("");
    setMessage("Guess a number from 1 to 100.");
    setTries(0);
    setHistory([]);
    setWon(false);
  };

  const renderGuessInput = () => {
    return (
      <>
        <label className="label" htmlFor="guess">
          Your guess
        </label>
        <input
          id="guess"
          className="input"
          value={guessText}
          onChange={(e) => setGuessText(e.target.value)}
          placeholder="1 - 100"
          inputMode="numeric"
          disabled={won}
          onKeyDown={(e) => {
            if (e.key === "Enter") submitGuess();
          }}
        />
      </>
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
        <button className="btn" onClick={reset}>
          Reset
        </button>
      </>
    );
  };

  return (
    <div className="game">
      <div className="card">
        <HeaderView tries={tries} range={`${MIN}–${MAX}`} />

        <div className="row">{renderGuessInput()}</div>
        <div className="actions">{renderActions()}</div>

        <MessageView message={message} />
        <HistoryView history={history} />
      </div>
    </div>
  );
}
