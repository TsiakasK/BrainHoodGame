import * as React from 'react';
import * as RealmWeb from 'realm-web';

const REALM_APP_ID = "brainhoodgame-xdgsw";
const app = new RealmWeb.App({ id: REALM_APP_ID });

const RealmAppContext = React.createContext<IRealmApp | void>(undefined);

export interface IRealmApp {
  id: string;
  user: Realm.User;
  logIn(): any;
}

const RealmApp: React.FC = ({ children }) => {
  const initUser = { id: '', state: RealmWeb.UserState.LoggedOut, name: 'tsiko', accessToken: null, refreshToken: null, profile: {} as any };
  const [user, setUser] = React.useState<Realm.User>(initUser);


  const logIn = async () => {
    // Create an anonymous credential
    const credentials = RealmWeb.Credentials.anonymous();
    try {
      // Authenticate the user
      const user = await app.logIn(credentials);
      // `App.currentUser` updates to match the logged in user
      // assert(user.id === app.currentUser.id)
      setUser(user);
      // return user
    } catch (err) {
      console.error("Failed to log in", err);
    }
  }

  // // Provide the current user and authentication methods to the wrapped tree
  const context: IRealmApp = {
    id: REALM_APP_ID,
    user,
    logIn
  };


  return (
    <RealmAppContext.Provider value={context}>
      {children}
    </RealmAppContext.Provider>
  );
};
export default RealmApp;

export const useRealmApp = (): IRealmApp => {
  const app = React.useContext(RealmAppContext);
  if (!app) {
    throw new Error("You must call useRealmApp() inside of a <RealmApp />.");
  }
  return app;
};