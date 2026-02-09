import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import TransactionList from "./components/TransactionList";
import UserHistoryModal from "./components/UserHistoryModal";
import {
  fetchTransactions,
  fetchUserHistory,
  updateTransactionStatus,
} from "./api/client";
import type { Transaction, UserHistoryResponse } from "./types";

function App() {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  const [selectedUserId, setSelectedUserId] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUserHistory, setSelectedUserHistory] =
    useState<UserHistoryResponse | null>(null);
  const [isHistoryLoading, setIsHistoryLoading] = useState(false);

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

  const handleViewHistory = async (userId: string) => {
    setSelectedUserId(userId);
    setIsModalOpen(true);
    setIsHistoryLoading(true);

    const historyData = await fetchUserHistory(userId);

    setSelectedUserHistory(historyData);
    setIsHistoryLoading(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedUserId("");
    setSelectedUserHistory(null);
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
        onViewHistory={handleViewHistory}
      />
      <UserHistoryModal
        isOpen={isModalOpen}
        selectedUserId={selectedUserId}
        isLoading={isHistoryLoading}
        userHistory={selectedUserHistory}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default App;
