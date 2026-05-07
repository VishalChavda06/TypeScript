import UserTable from "@/components/users/UserTable";
import { getUsers } from "@/lib/api";

export default async function UsersPage() {
  const users = await getUsers();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-blue-950">
        Users List
      </h1>

      <div className="bg-blue-950 rounded-2xl shadow p-6">
         <UserTable users={users} />
      </div>
    </div>
  );
}