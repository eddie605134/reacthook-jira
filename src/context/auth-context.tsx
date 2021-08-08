import React, { useState } from 'react';
import * as auth from 'auth-provider'
import { User } from './../screen/project-list/search-panel';

interface AuthForm {
  username: string,
  password: string,
}

const AuthContext = React.createContext(undefined)

AuthContext.displayName = 'AuthContext'

export const AuthProvider = () => {
  const [user, setUser] = useState<User | null>(null)

  const login = (form: AuthForm) => auth.login(form).then(setUser)
  const register = (form: AuthForm) => auth.register(form).then(setUser)
  const logout = (form: AuthForm) => auth.logout().then(() => setUser(null))
}