import type { Request, Response } from "express";
import {
  getTransactions,
  getUserHistory,
  updateTransactionStatus,
} from "../services/transactionService";

export const getTransactionsController = async (
  _request: Request,
  response: Response,
) => {
  try {
    const transactions = await getTransactions();
    response.json(transactions);
  } catch (error: unknown) {
    console.log(error);
    response
      .status(500)
      .json({ message: "Failed to fetch pending transactions" });
  }
};

export const getUserHistoryController = async (
  request: Request,
  response: Response,
) => {
  const { userId } = request.params as { userId: string };
  try {
    const userHistory = await getUserHistory(userId);
    if (!userHistory) {
      response.status(404).json({ message: "User not found" });
      return;
    }

    response.json(userHistory);
  } catch (error: unknown) {
    console.log(error);
    response.status(500).json({ message: "Failed to fetch user history" });
  }
};

export const updateTransactionStatusController = async (
  request: Request,
  response: Response,
) => {
  const { id } = request.params as { id: string };
  const { status } = request.body as { status?: string };

  if (status !== "approved" && status !== "rejected") {
    response.status(400).json({ message: "Invalid status" });
    return;
  }

  try {
    const transaction = await updateTransactionStatus(id, status);
    if (!transaction) {
      response.status(404).json({ message: "Transaction not found" });
      return;
    }

    response.json(transaction);
  } catch (error: unknown) {
    console.log(error);
    response
      .status(500)
      .json({ message: "Failed to update transaction status" });
  }
};
