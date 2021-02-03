import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ApolloProvider } from "@apollo/react-hooks";
import Modal from "react-modal";

import ApolloClient from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { IntrospectionFragmentMatcher } from "apollo-cache-inmemory";
import { InMemoryCache } from "apollo-cache-inmemory";

import introspectionQueryResultData from "./fragmentTypes.json";

const url = new URL(window.location);

// Create an http link:
const httpLink = new HttpLink({
  uri: `${url.protocol}//${url.host}${
    url.port ? `:${url.port}` : ""
  }/songs/graphql`,
});

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData,
});

const cache = new InMemoryCache({ fragmentMatcher });
const client = new ApolloClient({
  httpLink,
  cache,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

Modal.setAppElement("#root");
