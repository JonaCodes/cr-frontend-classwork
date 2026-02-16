import { jewishHolidays } from "../data/jewishHolidays";

function HolidaysPage() {
  return (
    <section className="pageSection">
      <h1>Major Jewish Holidays</h1>
      <div className="cardGrid">
        {jewishHolidays.map((holiday) => (
          <div key={holiday.name} className="cardItem holidayItem">
            <div className="holidayDate">{holiday.when}</div>
            <h2>{holiday.name}</h2>
            <p>{holiday.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HolidaysPage;
