import { useState } from "react"

const Navbar = () => {
    const [user, setUser] = useState(null)

    const login = () => {
      setUser({id:1,nombre:"Genesis"})
    }
    const logout = () => {
      setUser(null)
    }
    return (
<nav class="navbar navbar-expand-lg navbar-light bg-success">
<span>Usuario: {user? user.nombre : "Desconocido"}</span>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link" href="#">Inicio </a>
      <a class="nav-item nav-link" href="#">Ayuda</a>
    </div>
  </div>
  {user 
          ? (<button 
                className="btn btn-outline-light" 
                type="Button" 
                onClick = {logout} >Cerrar Sesion
        </button>)
          : (<button 
                className="btn btn-outline-light" 
                type="Button" 
                onClick = {login} >Iniciar Sesion
        </button>)
      }
</nav>
    )
}

export default Navbar 