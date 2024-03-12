import React from "react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import Layout from "../components/layout/MainLayout";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
