import TransactionCard from "./TransactionCard";
import type { Transaction } from "../types";

interface TransactionListProps {
  transactions: Transaction[];
  handleTransactionStatusUpdate: (
    transactionId: string,
    status: string,
  ) => void | Promise<void>;
  onViewHistory: (userId: string) => void | Promise<void>;
}

export default function TransactionList({
  transactions,
  handleTransactionStatusUpdate,
  onViewHistory,
}: TransactionListProps) {
  if (transactions.length === 0) {
    return <p className="empty-state">No pending transactions.</p>;
  }

  return (
    <section className="transaction-list">
      {transactions
        .sort((a, b) => {
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        })
        .map((transaction) => (
          <TransactionCard
            key={transaction.id}
            transaction={transaction}
            handleTransactionStatusUpdate={handleTransactionStatusUpdate}
            onViewHistory={onViewHistory}
          />
        ))}
    </section>
  );
}
