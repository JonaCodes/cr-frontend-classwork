import { users, type UserRecord } from "../data/mockData";

interface CreateUserInput {
  username: string;
  password: string;
}

export class UserRepository {
  async authenticate(username: string, password: string): Promise<UserRecord> {
    const user = users.find((existingUser) => existingUser.username === username);

    if (user?.password !== password) {
      throw new Error("Invalid username or password");
    }

    return user;
  }

  async findByUsername(username: string): Promise<UserRecord | null> {
    return users.find((user) => user.username === username) ?? null;
  }

  async create(input: CreateUserInput): Promise<UserRecord> {
    const newUser: UserRecord = {
      id: `u-${users.length + 1}`,
      username: input.username,
      password: input.password,
    };

    users.push(newUser);

    return newUser;
  }
}
