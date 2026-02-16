import { Link } from "react-router-dom";
import { birthdayMessages } from "../data/birthdayMessages";

function BirthdaysPage() {
  return (
    <section className="pageSection">
      <h1>Monthly Birthday Cards</h1>

      <div className="cardGrid">
        {Object.keys(birthdayMessages).map((month) => (
          <Link key={month} to={`/birthdays/${month}`} className="cardLink">
            <div className="cardItem">
              <h2>{month.toUpperCase()}</h2>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default BirthdaysPage;
