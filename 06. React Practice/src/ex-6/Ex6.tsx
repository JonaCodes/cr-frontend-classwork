import HeaderView from "./HeaderView";
import MessageView from "./MessageView";
import HistoryView from "./HistoryView";
import "./ex6.css";

const randInt = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default function Ex6() {
  /** Define the relevant states - you should have, at least:
   - A state for the guessed text
   - A state for the message

   Optionally, you can also add states for:
   - Number of tries
   - History of guesses
  */

  const submitGuess = () => {
    /*
      Implement the game logic here:
      - Get the input number
      - If the user guessed correctly, update the message to congratulate them
      - If it's too low/high, update the message to say so
      - Reset the input after each guess

      - Optionally also:
        - update the number of tries
        - update the history array (show last guesses)
    
    */
  };

  const renderGuessInput = () => {
    return (
      <>
        {/* Render the input box here, with the appropriate onChange event */}
      </>
    );
  };

  const renderActionButton = () => {
    return (
      <>{/* Render the Guess button here, with the appropriate onClick */}</>
    );
  };

  return (
    <div className="game">
      <div className="card">
        {/* Optional TODO: pass `tries` from state */}
        <HeaderView tries={0} />

        <div className="row">{renderGuessInput()}</div>
        <div className="actions">{renderActionButton()}</div>

        {/* TODO: pass the message from state */}
        <MessageView message={"Implement me!"} />

        {/* Optional TODO: pass the history of guesses */}
        <HistoryView history={[]} />
      </div>
    </div>
  );
}
