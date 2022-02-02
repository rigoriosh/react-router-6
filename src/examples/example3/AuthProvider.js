import React, { createContext, useState } from 'react';

export const AuthContext = createContext(null);

const fakeAuthProvider = {
    isAuthenticated: false,
    signin(callback) {
      fakeAuthProvider.isAuthenticated = true;
      setTimeout(callback, 100); // fake async
    },
    signout(callback) {
      fakeAuthProvider.isAuthenticated = false;
      setTimeout(callback, 100);
    }
  };

export const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null);

    const signin = (newUser, callback) => {
        return fakeAuthProvider.signin(() => {
            setUser(newUser);
            callback();
          });
    }

    const signout = (callback) => {
        return fakeAuthProvider.signout(() => {
          setUser(null);
          callback();
        });
      };

    let value = { user, signin, signout };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
