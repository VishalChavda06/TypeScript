import React from "react";
import { User } from "@/types/user";
import Link from "next/link";

interface Props {
  users: User[];
}

const UserTable = ({ users }: Props) => {
  return (
    <div className="bg-blue-950 rounded-2xl shadow overflow-hidden text-blue-200">
      <table className="w-full">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="text-left p-4">Name</th>
            <th className="text-left p-4">Email</th>
            <th className="text-left p-4">Phone</th>
            <th className="text-left p-4">Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="border-t  text-white transition-all 300 hover:text-blue-400 font-bold">
              <td className="p-4">{user.name}</td>

              <td className="p-4">{user.email}</td>

              <td className="p-4">{user.phone}</td>

              <td className="p-4">
                <Link
                  href={`/dashboard/users/${user.id}`}
                  className="text-blue-600"
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
