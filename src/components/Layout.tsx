import React from "react";
import Sidebar from "./Sidebar";
import UseLayout from "src/hooks/useLayout";
import TopNav from "./TopNav";

export default function Layout({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) {
  const { showMenu, setShowMenu } = UseLayout();
  return (
    <main>
      <TopNav show={showMenu} setShow={setShowMenu} />
      <Sidebar show={showMenu} setShow={setShowMenu} />
      <div className="md:ml-64 mt-12 md:m-0 p-4 h-screen">{children}</div>
    </main>
  );
}
