/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const calculateGrade = (req, res) => {
  const {
    inputCode,
    goalCode,
  } = req;

  let grade = 100;
  console.dir(req.body);

  if (!goalCode) {
    // do something if there's no goal code supplied
    res.status(400).json({ error:'No goal code supplied!' });
    return;
  }

  if (!inputCode) {
    // do something if there's no input code supplied
    grade = 0;
  }

  res.json({
    message: 'You\'re the best!',
    grade,
  });
};

module.exports = {
  calculateGrade,
}