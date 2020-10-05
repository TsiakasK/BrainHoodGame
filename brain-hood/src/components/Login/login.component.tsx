
import React from 'react';

import { IRealmApp } from '../../realm/realm-app';

export function Login(props: { app: IRealmApp }) {
  return (<button onClick={props.app.logIn}> Log In </button>);
}