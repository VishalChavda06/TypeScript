import {User } from "@/types/user";

const API_URL  = "https://jsonplaceholder.typicode.com";

export async function getUsers(): Promise<User[]> {
  const res = await fetch(`${API_URL}/users`);

  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }

  return res.json();
}