type Props = {
  tries: number;
  range: string;
};

export default function HeaderView({ tries, range }: Props) {
  return (
    <header className="header">
      <div>
        <h1 className="title">Guess the Number</h1>
        <p className="subtitle">Range: {range}</p>
      </div>
      <div className="pill">Tries: {tries}</div>
    </header>
  );
}
