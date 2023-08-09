import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function countFun(){setCount((count) => count + 1)}
  return (
    <>
      <h1>Registro</h1>
      <div className='form'>
       <div className='form-dias'>
       <select>
          <option value='lunes'>lunes</option>
          <option value='martes'>martes </option>
          <option value='miercoles'>miercoles</option>
          <option value='jueves'>jueves</option>
          <option value='viernes'>viernes</option>
          <option value='sabado'>sabado</option>
        </select>
        <button onClick={countFun}>Agregar</button>
       </div>
      <div className="contador">
      <h2>Contador</h2>
        <p>{count}</p>
      </div>
      </div>
      <div>
      <button className='reload'>Reiniciar Registro</button>
      <button className='save'>Registrar</button>
      </div>
    </>
  )
}

export default App
