import type { UserHistoryResponse } from "../types";

interface UserHistoryModalProps {
  isOpen: boolean;
  selectedUserId: string | null;
  isLoading: boolean;
  userHistory: UserHistoryResponse | null;
  onClose: () => void;
}

export default function UserHistoryModal({
  isOpen,
  selectedUserId,
  isLoading,
  userHistory,
  onClose,
}: UserHistoryModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal-overlay" role="presentation">
      <div className="modal-content" role="dialog" aria-modal="true">
        <div className="modal-header">
          <h2>User History</h2>
          <button
            className="modal-close-button"
            type="button"
            onClick={onClose}
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="modal-body">
          {isLoading ? <p>Loading user history...</p> : null}

          {!isLoading && !userHistory ? (
            <p>User {selectedUserId} was not found.</p>
          ) : null}

          {!isLoading && userHistory ? (
            <div>
              <div className="user-details">
                <p>
                  <strong>Name</strong> <span>{userHistory.user.name}</span>
                </p>
                <p>
                  <strong>Account Number</strong>{" "}
                  <span>{userHistory.user.accountNumber}</span>
                </p>
                <p>
                  <strong>Join Date</strong>{" "}
                  <span>
                    {new Date(userHistory.user.joinDate).toLocaleDateString()}
                  </span>
                </p>
              </div>

              <h3 className="history-title">Last 10 Transactions</h3>
              {userHistory.transactions.length === 0 ? (
                <p>No transaction history available.</p>
              ) : (
                <ul className="history-list">
                  {userHistory.transactions
                    .sort((a, b) => {
                      return (
                        new Date(b.date).getTime() - new Date(a.date).getTime()
                      );
                    })
                    .map((transaction) => (
                      <li key={transaction.id} className="history-item">
                        <div className="history-item-header">
                          <span className="history-desc">
                            {transaction.description}
                          </span>
                          <span className="history-amount">
                            {transaction.amount.toLocaleString("en-US", {
                              style: "currency",
                              currency: "USD",
                            })}
                          </span>
                        </div>
                        <div className="history-meta">
                          <span>
                            {new Date(transaction.date).toLocaleString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "short",
                                day: "2-digit",
                                hour: "2-digit",
                                minute: "2-digit",
                              },
                            )}
                          </span>
                          <span>{transaction.status}</span>
                        </div>
                      </li>
                    ))}
                </ul>
              )}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
