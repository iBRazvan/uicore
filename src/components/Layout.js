import React from "react";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen relative text-wide">
      <Header />
      <main className="flex-1 flex flex-col">{children}</main>
    </div>
  );
}
