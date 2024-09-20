import { use } from "react"

interface IPost {
  id: number,
  title: string
}

export function ListPosts(){
  const postActions = async () =>  {
    await new Promise(r=>setTimeout(r,3000))
    const result = await fetch('https://jsonplaceholder.typicode.com/posts')
    return result.json()
  }

  const posts = use(postActions())
  return (
    <ul>
      {posts && posts.map((post:IPost) => (
        <li key={post.id}>
          {post.title}
        </li>
      ))}
    </ul>
  )
}