"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/dashboard",
    },
    {
      name: "Products",
      path: "/dashboard/product",
    },
    {
      name: "Users",
      path: "/dashboard/user",
    },
  ];
  return (
    <>
      <aside className="w-64 bg-black text-white p-5">
        <h1 className="text-3xl font-bold mb-10">Admin Panel</h1>

        <nav className="flex flex-col gap-3">
          {menuItems.map((item) => {
            const isActive = pathname === item.path;

            return (
              <Link
                key={item.path}
                href={item.path}
                className={`
                p-3 rounded-lg transition
                ${isActive ? "bg-white text-black" : "hover:bg-gray-800"}
              `}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
