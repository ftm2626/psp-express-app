import React from "react";
import DashboardSvg from "public/icons/dashboard.svg";
import SignupSvg from "public/icons/signup.svg";
import { layoutPropT } from "src/types/layout";
import MenuItem from "./MenuItem";
import Cookies from "js-cookie";

export default function Sidebar({ show, privilege }: layoutPropT): JSX.Element {

  return (
    <aside
      id="default-sidebar"
      className={`fixed top-0 left-0 z-40 w-64 h-screen transition-transform mt-12 md:m-0 ${
        show && "-translate-x-full"
      } md:translate-x-0`}
      aria-label="Sidebar"
    >
      <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          <MenuItem
            text="List"
            link="/list"
            icon={<DashboardSvg className="text-xl text-gray-500" />}
          />
          {privilege === "1" && (
            <MenuItem
              text="Setting"
              link="/setting"
              icon={<SignupSvg className="text-xl text-gray-500" />}
            />
          )}
        </ul>
      </div>
    </aside>
  );
}
