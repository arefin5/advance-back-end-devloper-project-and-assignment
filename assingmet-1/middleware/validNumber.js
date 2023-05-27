// const validNumber = (req, res, next) => {
//     try {
//       const { start, end } = req.body;
//       const isValidStart = Number.isInteger(start);
//       const isValidEnd = Number.isInteger(end);
//       console.log(isValidEnd);
//       console.log(isValidStart);
//     //   console.log(isValidEnd===true || isValidStart===true);

//     //   next();
//     res.send("ok");
//     } catch (err) {
//       res.status(400).send("Invalid Number");
//     }
//   };
  
//   export default validNumber;


const validNumber = (req, res, next) => {
  try {
    const { start, end } = req.body;
    const isValidStart = Number.isInteger(Number(start));
    const isValidEnd = Number.isInteger(Number(end));
    console.log(isValidStart);

    console.log(isValidEnd);

    if (!isValidStart || !isValidEnd) {
      return res.status(400).send("Invalid Number please provide a valid number between start and end numbers");
    }

    // Proceed to the next middleware or route handler
    next();
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
};

export default validNumber;