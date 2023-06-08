import type { NextPage } from "next";
import Head from "next/head";
import { useQuery } from "react-query";
import ListItem from "src/components/ListItem";
import ListLoading from "src/components/ListLoading";
import { getQueryApiFn } from "src/logic/reactQueryApi";
import { postApiResT } from "src/types/apis";

const Home: NextPage = () => {
  const { isLoading, error, data } = useQuery(
    ["posts"],
    getQueryApiFn<postApiResT[]>
  );

  if (isLoading) return <ListLoading />;
  if (error) return <></>;

  return (
    <div>
      {data?.map((item) => (
        <ListItem key={item.id} list={item} />
      ))}
    </div>
  );
};

export default Home;
