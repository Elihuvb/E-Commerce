import { useState } from "react";
import Signup from './Signup'
import Loggin from './Loggin'

function Join() {
  const [render, setRender] = useState("register")

  const rendering = () => {
    switch (render) {
      case "register":
        return <Signup />
      case "login":
        return <Loggin />
      default:
        return <Signup />
    }
  }

  return (
    <div>
        <div>
          <button type="button" onClick={() => setRender("register")} >Signup</button>
          <button type="button" onClick={() => setRender("login")} >Login</button>
        </div>
        <div>
          {rendering()}
        </div>
    </div>
  )
}

export default Join