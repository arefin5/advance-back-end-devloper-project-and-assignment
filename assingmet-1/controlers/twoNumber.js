// import twonumbers from '../Helper/helper';
const Twonumber = (req, res) => {
   let { end, start } = req.body;
   res.status(200).send(`result = ${twonumbers(start, end)}`);

  //  res.status(200).send("result =",twonumbers(start, end));
 };
 const twonumbers = (start, end) => {
   let result = Math.floor(Math.random() * (end - start + 1)) + start;
   return result;
 };
 export default Twonumber;