import { SubmitButton } from "../SubmitButton/SubmitButton"

export function FormStatus(){
  const formAction = async (data:FormData) => {
    await new Promise(r=> setTimeout(r, 3000))

    const username = data.get('username')
    console.log(username)
  }
  return(
    <>
    <form action={formAction}>
        <label>Usuário</label>
        <input 
          type="text" 
          name="username" 
          id="username"
          placeholder="Digite seu usuário"/>
        <SubmitButton />
      </form>
    </>
  )
}