import { AuthContext, GlobalContext } from "@/app/context/AuthContext/AuthContext"
import { use } from "react"

export function User () {
 const {user, handleLogin} = use(AuthContext) as GlobalContext
  return (
    <div>
      <h1>Usuário {user}</h1>
      <button onClick={handleLogin}>Acessar</button>
    </div>
  )
}