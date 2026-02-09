import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TransactionList from "./components/TransactionList";
import { fetchTransactions, updateTransactionStatus } from "./api/client";
import type { Transaction } from "./types";

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const loadTransactionData = async () => {
    try {
      const transactions = await fetchTransactions();
      setTransactions(transactions);
    } catch (error) {
      console.error("Failed to load transactions:", error);
      setTransactions([]);
    }
  };

  const handleTransactionStatusUpdate = async (
    updatedTransactionId: string,
    status: string,
  ) => {
    await updateTransactionStatus(updatedTransactionId, status);
    await loadTransactionData();
  };

  useEffect(() => {
    const load = async () => {
      await loadTransactionData();
    };

    load();
  }, []);

  const pendingTransactions = transactions.filter(
    (transaction) => transaction.status === "pending",
  );

  return (
    <div className="app-container">
      <Header transactions={transactions} />
      <TransactionList
        transactions={pendingTransactions}
        handleTransactionStatusUpdate={handleTransactionStatusUpdate}
      />
    </div>
  );
}

export default App;
