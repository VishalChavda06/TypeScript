import { User } from "../types/user";

export async function getUsers(): Promise<User[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const data: unknown = await res.json();

  if (!Array.isArray(data)) return [];

  return data as User[];
}
