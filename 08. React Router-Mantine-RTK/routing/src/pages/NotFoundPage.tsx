function NotFoundPage() {
  return (
    <section className="pageSection">
      <h1>What are you doing here?</h1>
      <img
        className="notFoundImage"
        src="https://i.natgeofe.com/n/ddc432bf-dc2c-4019-97bb-af87601896b3/84214.jpg"
      />
      {/* We should give the user an option to click "back home" and actually.. go back home */}
      <p>This page does not exist. Maybe you should go back home?</p>
    </section>
  );
}

export default NotFoundPage;
