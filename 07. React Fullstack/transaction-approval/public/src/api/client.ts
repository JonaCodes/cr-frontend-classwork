import type { Transaction, UserHistoryResponse } from "../types";

const API_BASE_URL = "/api";

const fetchJson = async <T>(url: string, options?: RequestInit): Promise<T> => {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return response.json() as Promise<T>;
};

export const fetchTransactions = (): Promise<Transaction[]> => {
  return fetchJson<Transaction[]>(`${API_BASE_URL}/transactions`);
};

export const fetchUserHistory = (
  userId: string,
): Promise<UserHistoryResponse> => {
  return fetchJson<UserHistoryResponse>(
    `${API_BASE_URL}/users/${userId}/history`,
  );
};

export const updateTransactionStatus = (
  transactionId: string,
  status: string,
): Promise<Transaction> => {
  return fetchJson<Transaction>(
    `${API_BASE_URL}/transactions/${transactionId}/status`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
    },
  );
};
