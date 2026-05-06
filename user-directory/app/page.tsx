import { getUsers } from "@/lib/api";;
import Search from "./components/Serach";

export default async function Home() {
  const users = await getUsers();

  return (
    <div className="ms-10 me-20">
      <h1 className="text-4xl px-7 py-3 text-center">User Directory</h1>
        {/* {users.map((user)=>{
          return(
            <UserCard key={user.id} user={user} />
          )
        })} */}

        <Search users={users} />
     </div>
  );
}