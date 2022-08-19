import type { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { appWithTranslation } from "next-i18next";

import { RouterTransition } from "../components/RouterTransition";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Hari Kesehatan National 2022</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          fontFamily: "Inter var, sans-serif",
          primaryColor: "indigo",
        }}
      >
        <RouterTransition />
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}

export default appWithTranslation(MyApp);
