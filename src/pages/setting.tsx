import Cookies from "js-cookie";
import { GetServerSidePropsContext } from "next";
import React from "react";

export default function Setting({ userPrivilege }: { userPrivilege: string }) {
  return <div>this is the setting page and my user is {userPrivilege == '1' && 'admin'}</div>;
}
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const userPrivilege = context.req.cookies["user"];
  if (userPrivilege !== "1") {
    return {
      redirect: {
        permanent: false,
        destination: "/",
      },
    };
  }
  return {
    props: {
      userPrivilege: userPrivilege,
    },
  };
}
