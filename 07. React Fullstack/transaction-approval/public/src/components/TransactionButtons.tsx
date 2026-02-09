import type { Transaction } from "../types";

interface TransactionButtonsProps {
  transaction: Transaction;
  onViewHistory: (userId: string) => void | Promise<void>;
  handleTransactionStatusUpdate: (
    transactionId: string,
    status: string,
  ) => void | Promise<void>;
}

export default function TransactionButtons({
  transaction,
  onViewHistory,
  handleTransactionStatusUpdate,
}: TransactionButtonsProps) {
  const approveTransaction = async () => {
    await handleTransactionStatusUpdate(transaction.id, "approved");
  };

  const rejectTransaction = async () => {
    await handleTransactionStatusUpdate(transaction.id, "rejected");
  };

  return (
    <div className="transaction-actions">
      <button
        className="action-button approve-button"
        type="button"
        onClick={approveTransaction}
        title="Approve"
      >
        Approve
      </button>

      <button
        className="action-button reject-button"
        type="button"
        onClick={rejectTransaction}
        title="Reject"
      >
        Reject
      </button>

      <button
        className="action-button history-button"
        type="button"
        onClick={() => onViewHistory(transaction.userId)}
        title="View History"
      >
        History
      </button>
    </div>
  );
}
