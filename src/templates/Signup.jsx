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

    if (/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/.test(name) // solo puede contener letras
      && !/^[@]+$/.test(email) // debe tener "@"
    && password.length >= 10 // no menos de 10 caracteres
    && password === confirm) {
      console.log("Credenciales validas")
      console.log(name, email, password, confirm, isCheck)
      
      localStorage.setItem("name", name)
      localStorage.setItem("email", email)
      localStorage.setItem("password", password) // todos los datos se guardaran en local storage para futuros usos

      if (isCheck) {
        localStorage.setItem("memory", "yes") // por si el usuario desea que su cuenta quede abierta
       } else console.log("no recordar") 
    
      setName("")
      setEmail("")
      setPassword("")
      setConfirm("")
      setError(""); // reiniciando todos los campos

      window.location.href = "/"
    } else {
      setError("Algo esta mal") // si alguno de los campos arroja un error
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
        <button type="submit" disabled={!name =="" && !email == "" && !password == "" && !confirm == "" ? false : true}>Signup</button> {/* se habilita solo si todos los campos estan completos */}
      </form>
    </div>
  )
}

export default Signup