export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">
        Dashboard Overview
      </h1>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-blue-950 p-6 rounded-2xl shadow">
          <h2 className="text-lg font-semibold">
            Total Users
          </h2>

          <p className="text-4xl font-bold mt-4">
            1,245
          </p>
        </div>

        <div className="bg-blue-950 p-6 rounded-2xl shadow">
          <h2 className="text-lg font-semibold">
            Products
          </h2>

          <p className="text-4xl font-bold mt-4">
            320
          </p>
        </div>

        <div className="bg-blue-950 p-6 rounded-2xl shadow">
          <h2 className="text-lg font-semibold">
            Revenue
          </h2>

          <p className="text-4xl font-bold mt-4">
            $12K
          </p>
        </div>
      </div>
    </div>
  );
}