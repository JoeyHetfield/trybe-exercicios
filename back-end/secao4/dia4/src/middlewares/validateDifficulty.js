const validateDifficulty = (req, res, next) => {
  const difficulties = ['Fácil', 'Médio', 'Difícil'];
  const { difficulty } = req.body.description;
  if (!difficulties.includes(difficulty)) {
  res.status(400)
  .json({ message: 'O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'' });
  } else {
    next();
  }
};

module.exports = validateDifficulty;