
import React from "react";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "http://hr-graph-stage.stage.mediaload.co",
    cache: new InMemoryCache(),
});

export default client;