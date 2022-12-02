import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

import config from "./config";

const baseHttpLinkOptions = {
  uri: config.apiUrl,
};

const httpLink = createHttpLink(baseHttpLinkOptions);

const gqlClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: httpLink,
});

export const setAuthToken = (accessToken: string): void => {
  gqlClient.setLink(
    createHttpLink({
      ...baseHttpLinkOptions,
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    })
  );
};

export default gqlClient;
