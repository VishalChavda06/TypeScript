export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] bg-white p-8 shadow-xl shadow-slate-900/5 ring-1 ring-slate-200">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-950">
            Dashboard Overview
          </h1>
          <p className="max-w-2xl text-slate-500">
            A quick summary of your current users, product inventory, and revenue performance.
          </p>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl bg-slate-950 p-6 text-white shadow-xl shadow-slate-900/10">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Total Users</p>
          <p className="mt-6 text-5xl font-semibold">1,245</p>
        </div>

        <div className="rounded-3xl bg-slate-950 p-6 text-white shadow-xl shadow-slate-900/10">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Products</p>
          <p className="mt-6 text-5xl font-semibold">320</p>
        </div>

        <div className="rounded-3xl bg-slate-950 p-6 text-white shadow-xl shadow-slate-900/10">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Revenue</p>
          <p className="mt-6 text-5xl font-semibold">$12K</p>
        </div>
      </section>
    </div>
  );
}