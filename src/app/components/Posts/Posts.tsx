import { Suspense } from "react";
import { ListPosts } from "../ListPosts/ListPosts";

export function Post () {
  return (
    <div>
      <h1>Consumindo promise com use</h1>
      <Suspense fallback={<p>Carregando...</p>}>
        <ListPosts />
      </Suspense>
    </div>
  )
}