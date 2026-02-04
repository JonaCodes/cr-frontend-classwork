import "./ex5.css";

export default function Ex5() {
  // Define the state that handles the text in the textArea

  return (
    <div className="text-analyzer-page">
      <div className="text-analyzer">
        <h1>Text Analyzer</h1>

        <textarea
          className="text-input"
          placeholder="Start typing to see statistics..."
          rows={10}
          // implement the onChange event that updates state
        />

        {/* 
        Render the Stats component here, passing the calculated stats as props 
        Note that you have all the necessary calculations defined in `statsCalculator.ts`
        */}
      </div>
    </div>
  );
}
