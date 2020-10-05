import './App.css';

import React from 'react';

import {
    GameSessionGenerator
} from './components/GameSessionGenerator/game-session-generator.component';
import { Login } from './components/Login/login.component';
import RealmApolloProvider from './realm/realm-apollo-provider';
import RealmApp, { useRealmApp } from './realm/realm-app';

function App() {
  return (
    <RealmApp>
      <RealmApolloWrapper></RealmApolloWrapper>
    </RealmApp>
  );
}

export default App;


function RealmApolloWrapper() {
  const app = useRealmApp();
  if (!app) { return <div>Loading</div>; }

  return (
    <RealmApolloProvider>
      {app.user.id ? <GameSessionGenerator></GameSessionGenerator> : <Login app={app} />}
    </RealmApolloProvider>
  );
}