import { User } from "../models/User";

const users: User[] = [];

export const addUser = (name: string): User => {
  const newUser: User = { id: users.length + 1, UserName: name };
  users.push(newUser);
  return newUser;
};

export const getUser = (id: number): User | undefined => {
  return users.find(user => user.id === id);
};

