import Link from "next/link";
import React from "react";
import { menuItemPropT } from "src/types/layout";

export default function MenuItem({
  text,
  link,
  icon,
}: menuItemPropT): JSX.Element {
  return (
    <li>
      <Link
        href={link}
        className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
      >
        {icon}
        <span className="ml-3">{text}</span>
      </Link>
    </li>
  );
}
