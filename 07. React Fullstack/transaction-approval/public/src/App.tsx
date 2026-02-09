import { dummyTransactions } from "./api/dummyData";
import "./App.css";
import Header from "./components/Header";
import TransactionList from "./components/TransactionList";

function App() {
  const pendingTransactions = dummyTransactions.filter(
    (transaction) => transaction.status === "pending",
  );

  return (
    <div className="app-container">
      <Header transactions={dummyTransactions} />
      <TransactionList transactions={pendingTransactions} />
    </div>
  );
}

export default App;
