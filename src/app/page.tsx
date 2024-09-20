'use client'

import { Post } from "./components/Posts/Posts"
import { User } from "./components/User/User"
import { Authprovider } from "./context/AuthContext/AuthContext"

// import { FormStatus } from "./components/FormStatus/FormStatus"

// import { Form } from "./components/Form/Form";

export default function Home () {

  return (
    <>
      {/* <Form /> */}
      {/* <FormStatus /> */}
      {/* <Authprovider>
        <User />
      </Authprovider> */}
      <Post />
    </>
  )
}
