import type { Transaction } from "../types";
import TransactionButtons from "./TransactionButtons";
import TransactionDetails from "./TransactionDetails";

interface TransactionCardProps {
  transaction: Transaction;
  handleTransactionStatusUpdate: (
    transactionId: string,
    status: string,
  ) => void | Promise<void>;
}

export default function TransactionCard({
  transaction,
  handleTransactionStatusUpdate,
}: TransactionCardProps) {
  return (
    <article
      className={`transaction-card ${transaction.suspicious ? "suspicious" : ""}`}
    >
      <div className="transaction-info">
        <div className="transaction-header">
          <h2 className="transaction-id">#{transaction.id}</h2>
          {transaction.suspicious && (
            <span className="suspicious-badge">Suspicious</span>
          )}
        </div>

        <TransactionDetails transaction={transaction} />
      </div>

      <TransactionButtons
        transaction={transaction}
        handleTransactionStatusUpdate={handleTransactionStatusUpdate}
      />
    </article>
  );
}
