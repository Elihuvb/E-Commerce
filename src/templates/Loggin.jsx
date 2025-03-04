import {useState, useEffect} from 'react'

function Loggin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [attemps, setAttemps] = useState(0)
  const [blocked, setBlocked] = useState(false)
  const [isCheck, setIsCheck] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setEmail("")
    setPassword("")
    console.log(email)
    console.log(password)

    !localStorage.getItem("email") &&
    !localStorage.getItem("password") ?
    alert("correo o contraseña incorrectas") : console.log(200)

    if (isCheck) {
      localStorage.setItem("memory", "yes") // por si el usuario desea que su cuenta quede abierta
    } else console.log("no recordar")

    password != localStorage.getItem("password") &&
    email != localStorage.getItem("email") &&
    setAttemps(attemps  + 1)

    console.log(attemps)
  }

  useEffect(() => {
      if (attemps === 3) {
        setBlocked(true)

        const timer = setTimeout(() => {
          setAttemps(0)
          setBlocked(false)
        }, 30000);

        return () => {
          clearTimeout(timer)
        }
      }
    
    }, [attemps])

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Name or email</label>
          <input 
          type="email" 
          name="email" 
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={blocked ? true : false}
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
          disabled={blocked ? true : false}
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
        <div>
          <button type="submit" disabled={ !email == "" && !password == "" ? false : true }>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Loggin