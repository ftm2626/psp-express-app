import { QueryClient, QueryClientProvider } from "react-query";
import "../styles/globals.css";
import { AppProps } from "next/app";
import Layout from "src/components/Layout";
import { useEffect } from "react";
import Cookies from "js-cookie";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();
  const userPrivilege = "2";

  useEffect(() => {
    Cookies.set("user", userPrivilege);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Layout privilege={userPrivilege}>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}

export default MyApp;
