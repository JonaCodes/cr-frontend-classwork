import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

type TransactionStatus = "pending" | "approved" | "rejected";
type TransactionUpdateStatus = Exclude<TransactionStatus, "pending">;

interface Transaction {
  id: string;
  userId: string;
  userName: string;
  amount: number;
  date: string;
  description: string;
  suspicious?: boolean;
  status: TransactionStatus;
}

interface User {
  id: string;
  name: string;
  accountNumber: string;
  joinDate: string;
}

interface TransactionWithPending extends Transaction {
  suspicious: boolean;
  isPending: boolean;
}

interface UserHistory {
  user: User;
  transactions: TransactionWithPending[];
}

const currentFileDirectory = path.dirname(fileURLToPath(import.meta.url));
const dataDirectory = path.resolve(currentFileDirectory, "../data");
const transactionsFilePath = path.join(dataDirectory, "transactions.json");
const usersFilePath = path.join(dataDirectory, "users.json");

const readJsonFile = async <T>(filePath: string): Promise<T> => {
  const fileContents = await readFile(filePath, "utf-8");
  return JSON.parse(fileContents) as T;
};

const writeJsonFile = async <T>(filePath: string, data: T): Promise<void> => {
  await writeFile(filePath, `${JSON.stringify(data, null, 2)}\n`);
};

const normalizeTransaction = (
  transaction: Transaction,
): TransactionWithPending => {
  const suspicious =
    typeof transaction.suspicious === "boolean"
      ? transaction.suspicious
      : Math.random() < 0.35;
  return {
    ...transaction,
    suspicious,
    isPending: transaction.status === "pending",
  };
};

const toPersistentTransaction = (
  transaction: TransactionWithPending,
): Transaction => {
  return {
    id: transaction.id,
    userId: transaction.userId,
    userName: transaction.userName,
    amount: transaction.amount,
    date: transaction.date,
    description: transaction.description,
    suspicious: transaction.suspicious,
    status: transaction.status,
  };
};

const loadTransactions = async (): Promise<TransactionWithPending[]> => {
  const transactions = await readJsonFile<Transaction[]>(transactionsFilePath);
  const normalizedTransactions = transactions.map(normalizeTransaction);
  const hasMissingSuspiciousFlag = normalizedTransactions.some(
    (transaction, index) =>
      transactions[index].suspicious === undefined &&
      transaction.suspicious !== undefined,
  );

  if (hasMissingSuspiciousFlag) {
    const transactionsToPersist: Transaction[] = normalizedTransactions.map(
      toPersistentTransaction,
    );
    await writeJsonFile(transactionsFilePath, transactionsToPersist);
  }

  return normalizedTransactions;
};

const saveTransactions = async (
  transactions: TransactionWithPending[],
): Promise<void> => {
  const transactionsToPersist: Transaction[] = transactions.map(
    toPersistentTransaction,
  );
  await writeJsonFile(transactionsFilePath, transactionsToPersist);
};

export const getTransactions = async (): Promise<Transaction[]> => {
  const transactions = await loadTransactions();
  return transactions;
};

export const getUserHistory = async (
  userId: string,
): Promise<UserHistory | null> => {
  const [users, transactions] = await Promise.all([
    readJsonFile<User[]>(usersFilePath),
    loadTransactions(),
  ]);
  const user = users.find((existingUser) => existingUser.id === userId);

  if (!user) {
    return null;
  }

  const userTransactions = transactions
    .filter((transaction) => transaction.userId === userId)
    .sort((firstTransaction, secondTransaction) => {
      return (
        new Date(secondTransaction.date).getTime() -
        new Date(firstTransaction.date).getTime()
      );
    })
    .slice(0, 10);

  return {
    user,
    transactions: userTransactions,
  };
};

export const updateTransactionStatus = async (
  transactionId: string,
  newStatus: TransactionUpdateStatus,
): Promise<TransactionWithPending | null> => {
  const transactions = await loadTransactions();
  const transactionToUpdate = transactions.find(
    (transaction) => transaction.id === transactionId,
  );

  if (!transactionToUpdate) {
    return null;
  }

  transactionToUpdate.status = newStatus;
  transactionToUpdate.isPending = false;

  await saveTransactions(transactions);

  return transactionToUpdate;
};
