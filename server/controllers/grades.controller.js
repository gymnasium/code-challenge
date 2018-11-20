/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const calculateGrade = (req, res) => {
  res.json({
    message: 'You\'re the best!',
    grade: 87,
  });
};

module.exports = {
  calculateGrade,
}