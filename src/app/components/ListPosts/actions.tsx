'use server'

export async function postActions() {
  await new Promise(r=>setTimeout(r,3000))
  const result = await fetch('https://jsonplaceholder.typicode.com/posts')
  return result.json()
}