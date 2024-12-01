import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Mainlayout from './components/Mainlayout'
import Home from './components/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Mainlayout />}>
      <Route index element={<Home />}></Route>

      </Route>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
