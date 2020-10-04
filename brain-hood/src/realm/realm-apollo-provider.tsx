// Apollo
import { ApolloClient, DefaultOptions, HttpLink, InMemoryCache } from 'apollo-boost';
import { setContext } from 'apollo-link-context';
import * as React from 'react';
import * as RealmWeb from 'realm-web';

import { ApolloProvider } from '@apollo/react-hooks';

import { useRealmApp } from './realm-app';

const RealmApolloProvider: React.FC = ({ children }) => {
  // const { id, user } = useRealmApp();
  const { id, user } = useRealmApp();
  const [client, setClient] = React.useState(
    createApolloClient(id, user as RealmWeb.User)
  );
  React.useEffect(() => {
    setClient(createApolloClient(id, user as RealmWeb.User));
  }, [id, user]);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
export default RealmApolloProvider;

// TODO: Implement createApolloClient()
function createApolloClient(realmAppId: string, user: RealmWeb.User) {
  const graphql_url = `https://realm.mongodb.com/api/client/v2.0/app/${realmAppId}/graphql`;
  const httpLink = new HttpLink({ uri: graphql_url });
  const authorizationHeaderLink = setContext(async (_, { headers }) => ({
    headers: {
      ...headers,
      Authorization: `Bearer ${user.accessToken}`
    },
  }));

  const defaultOptions: DefaultOptions = {
    watchQuery: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'ignore'
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  }

  return new ApolloClient({
    link: authorizationHeaderLink.concat(httpLink),
    cache: new InMemoryCache(),
    defaultOptions
  });
}