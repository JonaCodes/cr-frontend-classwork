export interface UserRecord {
  id: string;
  username: string;
  password: string;
}

export interface TaskRecord {
  id: string;
  title: string;
  status: "todo" | "in-progress" | "done";
  ownerId: string;
}

export const users: UserRecord[] = [
  {
    id: "u-1",
    username: "user",
    password: "user123",
  },
  {
    id: "u-2",
    username: "dina",
    password: "dina123",
  },
];

export const tasks: TaskRecord[] = [
  { id: "t-1", title: "Write unit tests", status: "todo", ownerId: "u-1" },
  {
    id: "t-2",
    title: "Prepare sprint demo",
    status: "in-progress",
    ownerId: "u-1",
  },
  { id: "t-3", title: "Review pull requests", status: "done", ownerId: "u-2" },
];
