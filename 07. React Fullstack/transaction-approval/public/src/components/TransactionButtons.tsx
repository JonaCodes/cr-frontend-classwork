import type { Transaction } from "../types";

interface TransactionButtonsProps {
  transaction: Transaction;
}

export default function TransactionButtons({
  transaction,
}: TransactionButtonsProps) {
  console.log(transaction);

  return (
    <div className="transaction-actions">
      <button
        className="action-button approve-button"
        type="button"
        title="Approve"
      >
        Approve
      </button>

      <button
        className="action-button reject-button"
        type="button"
        title="Reject"
      >
        Reject
      </button>
    </div>
  );
}
