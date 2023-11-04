// import react from "react";
// import Layout from "../components/Layout/Layout";
import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import client from "./api/apollo_client";
// import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
