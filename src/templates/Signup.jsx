import {useState} from 'react'

function Signup() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")
  const [isCheck, setIsCheck] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = e => {
    e.preventDefault()

    if (/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/.test(name) 
      && !/^[@]+$/.test(email) 
    && password.length >= 10 
    && password === confirm) {
      console.log("Credenciales validas")
      console.log(name, email, password, confirm, isCheck)

      isCheck ? (
        localStorage.setItem("memory", "yes")
      ) : console.log("no recordar")
    
      setName("")
      setEmail("")
      setPassword("")
      setConfirm("")
      setError("");
    } else {
      setError("Algo esta mal")
      console.error(error)
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input 
          type="text"
          maxLength={"60"}
          pattern='[A-Za-zÁÉÍÓÚáéíóúñÑ ]+'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input 
          type="email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input 
          type="password"
          minLength={"10"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          />
        </div>
        <div>
          <label htmlFor="confirm">Confirm password</label>
          <input 
          type="password"
          minLength={"10"}
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          required
          />
        </div>
        <div>
          <label htmlFor="remember">Recordar contraseña </label>
          <input 
          type="checkbox" 
          name="remember" 
          id="remember"
          onChange={() => setIsCheck(!isCheck)}
          />
        </div>
        <button type="submit" disabled={!name =="" && !email == "" && !password == "" && !confirm == "" ? false : true}>Signup</button>
      </form>
    </div>
  )
}

export default Signup