import { taskActions } from "@/app/actions";
import { useActionState } from "react";

export function Form(){
  const [returnAction, action, isPending] = useActionState(taskActions, null)
  return (
    <>
    <form action={action}>
        <label>Nome da tarefa</label>
        <input 
          type="text" 
          name="username" 
          id="username"
          placeholder="Digite seu usuário"/>
        <button 
          type="submit"
          disabled={isPending}>
          Cadastrar
        </button>
      </form>

      {returnAction}
    </>
  )
}