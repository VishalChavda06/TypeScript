import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="h-16 bg-blue-950 border-b flex items-center justify-between px-6">
        <div>
            <h2 className="text-2xl font-semibold">Dashboard</h2>
        </div>
        <div>
            <p className="text-2xl">Vishu 😎</p>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
