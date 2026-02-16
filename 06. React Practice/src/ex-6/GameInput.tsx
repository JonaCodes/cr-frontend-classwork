import type { GameInputProps } from "./types";

export default function GameInput({
  guessText,
  setGuessText,
  submitGuess,
}: GameInputProps) {
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
}
