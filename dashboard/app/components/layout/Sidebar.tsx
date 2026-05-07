"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Products", path: "/dashboard/product" },
    { name: "Users", path: "/dashboard/user" },
  ];

  return (
    <aside className="w-64 min-h-screen bg-slate-950 text-slate-100 flex flex-col sticky top-0 shadow-xl z-30">
      {/* Brand / Logo area */}
      <div className="px-6 py-6 border-b border-slate-800">
        <h1 className="text-2xl font-bold tracking-tight">Admin Panel</h1>
        <p className="mt-1 text-sm text-slate-400">Manage dashboard content</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-4 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const isActive =
            pathname === item.path || pathname?.startsWith(item.path + "/");

          return (
            <Link
              key={item.path}
              href={item.path}
              className={`block rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
                isActive
                  ? "bg-white text-slate-950 shadow-sm"
                  : "text-slate-300 hover:bg-slate-800 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;