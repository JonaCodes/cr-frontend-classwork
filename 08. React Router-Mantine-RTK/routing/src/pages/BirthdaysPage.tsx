import { birthdayMessages } from "../data/birthdayMessages";

function BirthdaysPage() {
  return (
    <section className="pageSection">
      <h1>Monthly Birthday Cards</h1>

      <div className="cardGrid">
        {Object.keys(birthdayMessages).map((month) => (
          // How do we make this card take us to the actual birthday card page?
          <div className="cardItem">
            <h2>{month.toUpperCase()}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}

export default BirthdaysPage;
