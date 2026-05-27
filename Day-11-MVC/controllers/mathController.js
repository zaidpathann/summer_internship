const addNumbers = (req, res) => {

   const a = Number(req.query.a)

   const b = Number(req.query.b)

   const result = a + b

   res.json({

      operation: "Addition",

      firstNumber: a,

      secondNumber: b,

      result

   })

}

const subNumbers = (req, res) => {

   const a = Number(req.query.a)

   const b = Number(req.query.b)

   const result = a - b

   res.json({

      operation: "Subtraction",

      firstNumber: a,

      secondNumber: b,

      result

   })

}

module.exports = {

   addNumbers,
   subNumbers

}