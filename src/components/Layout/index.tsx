import React from "react";
import { Link } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <header className="bg-primary py-8 px-4">
        <h2 className="text-white font-bold text-2xl lg:w-[1000px] lg:mx-auto">
          TO DO LIST APP
        </h2>
      </header>
      <main className="mx-4 lg:w-[1000px] lg:mx-auto">{children}</main>
    </>
  );
};

export default Layout;
