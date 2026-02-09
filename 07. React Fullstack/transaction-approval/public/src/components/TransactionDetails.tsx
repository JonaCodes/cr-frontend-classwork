import type { Transaction } from "../types";

interface TransactionDetailsProps {
  transaction: Transaction;
}

export default function TransactionDetails({
  transaction,
}: TransactionDetailsProps) {
  const formattedAmount = transaction.amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  const formattedDate = new Date(transaction.date).toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="transaction-details-compact">
      <div className="transaction-field-compact">
        <span className="field-label">User</span>
        <span className="field-value">{transaction.userName}</span>
      </div>

      <div className="transaction-field-compact">
        <span className="field-label">Date</span>
        <span className="field-value">{formattedDate}</span>
      </div>

      <div className="transaction-field-compact">
        <span className="field-label">For</span>
        <span className="field-value">{transaction.description}</span>
      </div>

      <div className="transaction-field-compact">
        <span className="field-label">Amount</span>
        <span className="field-value amount">{formattedAmount}</span>
      </div>
    </div>
  );
}
