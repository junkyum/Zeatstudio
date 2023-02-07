import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-wrap-balancer";
import Layout from "@/components/layout/layout";

export default function MyApp({ Component }: AppProps) {
  return (
    <Provider>
      <Layout>
        <Component />
      </Layout>
    </Provider>
  );
}
