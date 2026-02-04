type Props = {
  tries: number;
};

export default function HeaderView({ tries }: Props) {
  return (
    <header className="header">
      <h1 className="title">Guess the Number</h1>
      <div className="pill">Tries: {tries}</div>
    </header>
  );
}
