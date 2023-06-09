import React from "react";
import Sidebar from "./Sidebar";
import UseLayout from "src/hooks/useLayout";
import TopNav from "./TopNav";

export default function Layout({
  children,
  privilege,
}: {
  children: JSX.Element | JSX.Element[];
  privilege: string;
}) {
  const { showMenu, setShowMenu } = UseLayout();
  return (
    <main>
      <TopNav show={showMenu} setShow={setShowMenu} />
      <Sidebar show={showMenu} setShow={setShowMenu}  privilege={privilege}/>
      <div className="md:ml-64 mt-12 md:m-0 p-4 h-screen">{children}</div>
    </main>
  );
}
