import {useState} from 'react'

function Loggin() {
  const [nameOrEmail, setNameOrEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setNameOrEmail("")
    setPassword("")
    console.log(nameOrEmail)
    console.log(password)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nameOrEmail">Name or email</label>
          <input 
          type="text" 
          name="nameOrEmail" 
          id="nameOrEmail"
          value={nameOrEmail}
          onChange={(e) => setNameOrEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input 
          type="password" 
          name="password" 
          id="password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit" disabled={ !nameOrEmail == "" && !password == "" ? false : true }>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Loggin