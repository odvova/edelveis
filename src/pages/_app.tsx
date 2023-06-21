import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { theme } from "../chakra/theme";
import Layout from "../components/Layout/Layout";
import { RecoilRoot } from "recoil";
import { useRouter } from "next/router";
import SwaggerPage from "./swagger";
import React from "react";

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  // Check if the current page is the Swagger page
  const isSwaggerPage = router.pathname === "/swagger";

  return (
    <RecoilRoot>
      <ChakraProvider theme={theme}>
        <Layout>
          {/* Render Swagger UI if it's the Swagger page */}
          {isSwaggerPage ? <SwaggerPage /> : <Component {...pageProps} />}
        </Layout>
      </ChakraProvider>
    </RecoilRoot>
  );
};

export default App;
