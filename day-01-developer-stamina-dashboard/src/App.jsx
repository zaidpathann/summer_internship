import { useState } from 'react'
import Header from "./components/Header"
import SkillList from "./components/SkillList"
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

function Task3(){
   const skills = [
    {name:"JavaScript", level:95},
    {name:"React", level:80},
    {name:"Node JS", level:85},
    {name:"MongoDB", level:75}
  ]

  return (

    <div className="zp-container">

      <Header />

      <div className="zp-skills-section">

        <h2 className="zp-section-title">
          Developer Skills
        </h2>

        <SkillList skills={skills} />

      </div>

    </div>
  )
}

function Task4(){
  const skills = [
    {name:"JavaScript", level:95},
    {name:"React", level:80},
    {name:"Node JS", level:85},
    {name:"MongoDB", level:75}
  ]

  const [stamina, setStamina] = useState(100)

  const [clickCount, setClickCount] = useState(0)

  const handleCode = () => {

    if(stamina <= 0){
      return
    }

    const newClickCount = clickCount + 1

    setClickCount(newClickCount)

    let reduction = 2

    if(newClickCount % 5 === 0){
      reduction = 15
    }

    const updatedStamina = stamina - reduction

    if(updatedStamina <= 0){
      setStamina(0)
    }
    else{
      setStamina(updatedStamina)
    }
  }

  return (

    <div className="zp-container">

      <Header />

      <div className="zp-skills-section">

        <h2 className="zp-section-title">
          Developer Skills
        </h2>

        <SkillList skills={skills} />

      </div>

      <div className="zp-stamina-section">

        <h2 className="zp-section-title">
          Developer Stamina
        </h2>

        <h1 className="zp-stamina-value">
          {stamina}
        </h1>

        <button
          className="zp-button"
          onClick={handleCode}
          disabled={stamina <= 0}
        >

          {
            stamina <= 0
            ?
            "Burnout! Rest Required"
            :
            "Write Code"
          }

        </button>

      </div>

    </div>
  )
}

export default App
export { Greetings, Task3, Task4 }