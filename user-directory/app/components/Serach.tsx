"use client";

import { useState } from "react";
import { User } from "@/types/user";
import UserCard from "./UserCard";

interface Props {
  users: User[];
}

export default function Search({ users }: Props) {
  const [query, setQuery] = useState<string>("");

  const filtered = users.filter((u) =>
    u.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <input
        placeholder="Search user..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border border-gray-300 rounded-md px-4 py-2 mb-4 w-full"
      />

      {filtered.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}