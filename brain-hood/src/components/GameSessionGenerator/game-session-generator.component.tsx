import React from 'react';

import { useInsertManySessionsMutation } from '../../graphql-operations';
import { generateMockData } from '../../shared/helpers/mock-data-generator';

export function GameSessionGenerator() {
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