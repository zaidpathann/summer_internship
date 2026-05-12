import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App, { Greetings, Task3, Task4 } from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App/> */}
    {/* <Greetings /> */}
    {/* <Task3  /> */}
    <Task4 />
  </StrictMode>,
)
