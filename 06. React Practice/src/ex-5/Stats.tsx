interface StatsProps {
  wordCount: number;
  charCount: number;
  mostCommonWord: string;
  sentenceCount: number;
  avgSentenceLength: number;
}

export default function Stats({
  wordCount,
  charCount,
  mostCommonWord,
  sentenceCount,
  avgSentenceLength,
}: StatsProps) {
  return (
    <div className="stats-container">
      <div className="stats-row">
        <div className="stat-card">
          <span className="stat-label">Words</span>
          <span className="stat-value">{wordCount}</span>
        </div>

        <div className="stat-card">
          <span className="stat-label">Characters</span>
          <span className="stat-value">{charCount}</span>
        </div>

        <div className="stat-card">
          <span className="stat-label">Most Common</span>
          <span className="stat-value most-common">{mostCommonWord}</span>
        </div>

        <div className="stat-card">
          <span className="stat-label">Sentences</span>
          <span className="stat-value">{sentenceCount}</span>
        </div>
      </div>

      <div className="stat-card-wide">
        <span className="stat-label">Average Sentence Length</span>
        <span className="stat-value">
          {avgSentenceLength} {avgSentenceLength === 1 ? "word" : "words"}
        </span>
      </div>
    </div>
  );
}
