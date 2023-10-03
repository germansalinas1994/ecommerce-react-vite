import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import 'animate.css'


import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const apiLocalKey = import.meta.env.VITE_APP_API_KEY

  const llamarServidor = async () => {
    try {
      const res = await axios.get(apiLocalKey + '/categorias')
      console.log(res.data.result)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <>
      <div className='animate__animated animate__flip'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <button onClick={() => llamarServidor()}>
            Llamar Servidor
          </button>

          <Container>
            <h1 >Prueba</h1>
            <Button variant='contained'>Hello World</Button>

          </Container>


          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>

    </>
  )
}

export default App
