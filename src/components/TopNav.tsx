import React from "react";
import MenuSvg from "public/icons/menu.svg";
import { layoutPropT } from "src/types/layout";

export default function TopNav({ show, setShow }: layoutPropT): JSX.Element {
  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600 md:hidden">
      <div className="flex p-1.5">
        <button
          data-collapse-toggle="navbar-sticky"
          type="button"
          className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-sticky"
          aria-expanded="false"
          onClick={() => setShow(!show)}
        >
          <span className="sr-only">Open main menu</span>
          <MenuSvg className="text-xl" />
        </button>
      </div>
      <div
        className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-sticky"
      ></div>
    </nav>
  );
}
