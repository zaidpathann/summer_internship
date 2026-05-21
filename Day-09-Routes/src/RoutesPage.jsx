import { useParams } from "react-router-dom"

import "./App.css"

function RoutesPage() {

  const {
    operation,
    num1,
    num2
  } = useParams()

  const firstNumber = Number(num1)

  const secondNumber = Number(num2)

  let message = ""

  let result = 0

  switch(operation){

    case "add":

      result =
        firstNumber + secondNumber

      message =
        `Addition of ${num1} and ${num2}`

      break

    case "sub":

      result =
        firstNumber - secondNumber

      message =
        `Subtraction of ${num1} and ${num2}`

      break

    case "mul":

      result =
        firstNumber * secondNumber

      message =
        `Multiplication of ${num1} and ${num2}`

      break

    case "div":

      result =
        firstNumber / secondNumber

      message =
        `Division of ${num1} and ${num2}`

      break

    default:

      message = "Invalid Route"

  }

  return (

    <div className="zp-container">

      <div className="zp-card">

        <h1>
          React Route Params
        </h1>

        <h2>
          {message}
        </h2>

        {

          operation === "add" ||
          operation === "sub" ||
          operation === "mul" ||
          operation === "div"

          ?

          <h1 className="zp-result">

            Result : {result}

          </h1>

          :

          null

        }

      </div>

    </div>

  )
}

export default RoutesPage