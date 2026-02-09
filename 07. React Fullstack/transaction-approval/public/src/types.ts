export interface Transaction {
  id: string;
  userId: string;
  userName: string;
  amount: number;
  date: string;
  description: string;
  suspicious: boolean;
  status: string;
  isPending: boolean;
}

export interface User {
  id: string;
  name: string;
  accountNumber: string;
  joinDate: string;
}

export interface UserHistoryResponse {
  user: User;
  transactions: Transaction[];
}
