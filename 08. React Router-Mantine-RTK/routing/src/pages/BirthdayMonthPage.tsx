import { birthdayMessages } from "../data/birthdayMessages";

function BirthdayMonthPage() {
  const month = "january"; // TODO: get this from the url, not hard-coded like this
  const message = birthdayMessages[month || ""];

  const renderBackButton = () => {
    return <button>back to all months</button>;
  };

  if (!message) {
    return (
      <section className="pageSection">
        <h1>Did you even go to first grade?</h1>
        <p>
          There is no such month as "{month?.toUpperCase()}" <br />
          <span>You fool, you absolute baboon</span>
        </p>

        {renderBackButton()}
      </section>
    );
  }

  return (
    <section className="pageSection monthSection">
      <h1 className="monthTitle">{month?.toUpperCase()}</h1>
      <div className="monthMessage">{message}</div>

      {renderBackButton()}
    </section>
  );
}

export default BirthdayMonthPage;
