import { User } from "@/types/user";
import Link from "next/link";

interface Props {
  user: User;
}

export default function UserCard({ user }: Props) {
  return (
    <div className="bg-blue-950 text-xl m-4  text-white px-7 py-3 w-full">
      <Link href={`/user/${user.id}`} className="flex flex-col gap-2">
        <h3>{user.name}</h3>
        <p className="text-sm">{user.email}</p>
        <p className="text-sm">{user.phone}</p>
      </Link>
    </div>
  );
}
