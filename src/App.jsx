import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import 'animate.css'
import Home from './pages/Home'
import AppRouter from './router/appRouter';


// import './css/App.css'

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
    <AppRouter />

  )
}

export default App
