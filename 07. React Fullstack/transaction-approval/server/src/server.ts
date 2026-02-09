import cors from "cors";
import express from "express";
import {
  getTransactionsController,
  getUserHistoryController,
  updateTransactionStatusController,
} from "./controllers/transactionController";

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.get("/api/transactions", getTransactionsController);
app.get("/api/users/:userId/history", getUserHistoryController);
app.post("/api/transactions/:id/status", updateTransactionStatusController);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
