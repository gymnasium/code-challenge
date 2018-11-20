/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
const calculateGrade = (req, res) => {
  res.json({
    response: 'we calculated a grade here!',
  });
};

module.exports = {
  calculateGrade,
}