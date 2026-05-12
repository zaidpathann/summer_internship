import Header from "./components/Header"
import './App.css'

function App() {

  return (
    <div class="Task-1">
      <h1 >
        {import.meta.env.VITE_INTERN_NAME}
      </h1>
    </div>
  )
}

function Greetings(){
  return (
    <div className="zp-container">

      <Header />

    </div>
  )
}

export default App
export { Greetings }