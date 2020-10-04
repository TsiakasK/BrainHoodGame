import './App.css';

import React from 'react';

import { useInsertManySessionsMutation } from './graphql-operations';
import RealmApolloProvider from './realm/realm-apollo-provider';
import RealmApp, { IRealmApp, useRealmApp } from './realm/realm-app';

function App() {
  return (<RealmApp>
    <RealmApolloWrapper></RealmApolloWrapper>
  </RealmApp>
  );
}

export default App;


function RealmApolloWrapper() {
  const app = useRealmApp();
  if (!app) { return <div>Loading</div>; }

  return (<RealmApolloProvider>
    {app.user.id ?
      <GameSessionGenerator></GameSessionGenerator> :
      <Login app={app} />}
  </RealmApolloProvider>);
}

function GameSessionGenerator() {
  const [insertManySessionsMutation] = useInsertManySessionsMutation();
  const addSessionData = async (data: any) => { // TODO: fix type
    await insertManySessionsMutation({ variables: data });
  }

  const onSubmitNewData = () => {
    const data = [1, 2, 3, 4, 5, 6, 7, 8, 9].map(generateMockData);
    addSessionData({ data });
  }
  return (<div className="App">
    <header className="App-header">
      <h3>Brain Hood Game</h3>
      <button onClick={onSubmitNewData}>Submit Data</button>
    </header>
  </div>);
}

const generateMockData = (index: number): any => {
  const rand = Number(Math.random() * 100).toFixed();
  return {
    "id": index,
    "round": index,
    "tspots": [rand, 4, rand, 5, 4, 5, rand, 4, 5, 4, rand, 5, 4, rand, 4, 5, rand, 4, rand, 0],
    "ttypes": [2, 4, 1, 4, 2, 4, 2, rand, 1, 2, 2, rand, rand, 1, 2, rand, 2, 4, 1, 2],
    "tcolors": [1, 1, 1, 2, 2, 2, 1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 2, 2, 1, 1],
    "shoot": [0, 1, 1, 1, rand, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1],
    "move": [0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1],
    "tselection": [1, 0, 0, 0, 1, rand], "OLM": ["t", "t1", "t2", "trand", "t4"],
    "scores": ["s1", "s2", "s3", "s4", "game", "points"]
  }
}

// Create a component that lets an anonymous user log in
function Login(props: { app: IRealmApp }) {
  return <button onClick={props.app.logIn}>Log In</button>;
}
