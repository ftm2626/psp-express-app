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
      {children}
    </main>
  );
}
