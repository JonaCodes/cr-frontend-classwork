import type { Transaction } from "../types";

interface TransactionButtonsProps {
  transaction: Transaction;
  handleTransactionStatusUpdate: (
    transactionId: string,
    status: string,
  ) => void | Promise<void>;
}

export default function TransactionButtons({
  transaction,
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
    </div>
  );
}
