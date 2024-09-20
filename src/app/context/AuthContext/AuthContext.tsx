'use client'

import { ScriptProps } from "next/script";
import { createContext, useState } from "react";

export type GlobalContext = {
  user: string,
  handleLogin: () => void
}

export const AuthContext = createContext<GlobalContext | null>(null)

export function Authprovider ({children}:ScriptProps) {
  const [user,setUser] = useState('Aluno')
  const handleLogin = () => {
    setUser('Professor')
  }

  return (
    <AuthContext.Provider value={{user, handleLogin}}>
      {children}
    </AuthContext.Provider>
  )
}