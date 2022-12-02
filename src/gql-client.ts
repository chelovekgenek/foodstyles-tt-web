import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

import config from "./config";

const httpLink = createHttpLink({
  uri: config.apiUrl,
});

const gqlClient = new ApolloClient({
  uri: config.apiUrl,
  cache: new InMemoryCache(),
  link: httpLink,
});

export const setAuthToken = (accessToken: string): void => {
  gqlClient.setLink(
    createHttpLink({
      uri: config.apiUrl,
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    })
  );
};

export default gqlClient;
