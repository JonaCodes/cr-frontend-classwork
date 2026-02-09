import type { Transaction } from "../types";

interface HeaderProps {
  transactions: Transaction[];
}

export default function Header({ transactions }: HeaderProps) {
  const pendingCount = transactions.filter(
    (transaction) => transaction.status === "pending",
  ).length;

  const approvedCount = transactions.filter(
    (transaction) => transaction.status === "approved",
  ).length;

  const rejectedCount = transactions.filter(
    (transaction) => transaction.status === "rejected",
  ).length;

  return (
    <header className="header">
      <h1 className="header-title">Transaction Approval Queue</h1>
      <div className="header-summary">
        <div className="summary-item">
          <span className="summary-label">Pending</span>
          <span className="summary-value">{pendingCount}</span>
        </div>
        <div className="summary-divider" />
        <div className="summary-item">
          <span
            className="summary-label"
            style={{ color: "var(--success-color)" }}
          >
            Approved
          </span>
          <span className="summary-value">{approvedCount}</span>
        </div>
        <div className="summary-divider" />
        <div className="summary-item">
          <span
            className="summary-label"
            style={{ color: "var(--danger-color)" }}
          >
            Rejected
          </span>
          <span className="summary-value">{rejectedCount}</span>
        </div>
      </div>
    </header>
  );
}
