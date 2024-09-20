'use server'

export async function taskActions(_:unknown, data:FormData){
  console.log(Object.entries(data))
  return 'React 19'
}