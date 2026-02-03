type Props = { history: number[] };

export default function HistoryView({ history }: Props) {
  if (history.length === 0) return null;

  return (
    <section className="section">
      <h2 className="sectionTitle">Last guesses</h2>
      <div className="chips">
        {history.map((n, i) => (
          <span className="chip" key={`${n}-${i}`}>
            {n}
          </span>
        ))}
      </div>
    </section>
  );
}
