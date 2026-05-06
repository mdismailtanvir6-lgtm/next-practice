import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Dashboard Home</h1>
      <p>Welcome {session?.user?.name}</p>

      {/* Demo Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
        <div className="p-4 bg-white rounded shadow">
          <h2 className="font-semibold">Users</h2>
          <p className="text-2xl mt-2">120</p>
        </div>

        <div className="p-4 bg-white rounded shadow">
          <h2 className="font-semibold">Orders</h2>
          <p className="text-2xl mt-2">45</p>
        </div>

        <div className="p-4 bg-white rounded shadow">
          <h2 className="font-semibold">Revenue</h2>
          <p className="text-2xl mt-2">$2,300</p>
        </div>
      </div>
    </div>
  );
}
