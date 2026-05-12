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

export default App
export { Greetings, Task3 }