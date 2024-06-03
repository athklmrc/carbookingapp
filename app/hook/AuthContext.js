import React from 'react'

export default function AuthContext() {

  const AuthContext = React.createContext();
  const [ user, setUser ] = React.useState();

  return (
    <AuthContext.Provider value={{user, setUser}}>
      {children}
    </AuthContext.Provider>
  )
}