
import './App.css'
import { Contador } from './components/contador/contador'
import { Productos } from './components/fetch/productos'
import { Herencia } from './components/herencias/herencias'
import { ListaUsuarios } from './components/map/usuarios'
import { ListadoEmpresa } from './components/modificadores/listadoEmpresa'



function App() {


  return (
    <>
      <Contador/>
      <ListaUsuarios/>
      <Herencia/>
      <Productos/>
      <ListadoEmpresa/>
    </>
  )
}

export default App
