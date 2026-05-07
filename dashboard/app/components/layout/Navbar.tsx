import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-20 h-16 bg-slate-950 border-b border-slate-800 px-6 shadow-sm shadow-slate-900/10">
      <div className="flex h-full items-center justify-between text-white">
        <div>
          <h1 className="text-xl font-semibold tracking-tight">Dashboard</h1>
          <p className="text-sm text-slate-300">Welcome back, Vishu</p>
        </div>
        <div className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-200">
          Vishu 😎
        </div>
      </div>
    </nav>
  );
};

export default Navbar;