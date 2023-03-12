const validateDescription = (req, res, next) => {
  const { description } = req.body;
  const { createdAt, rating, difficulty } = description;
  if (!description) {
    res.status(400).json({ message: 'O campo description é obrigatório' });
  } else if (!createdAt || !rating || !difficulty) {
      res.status(400).json({ message: 'Os campo createdAt, rating e difficulty são obrigatórios' });
    } else next();
  };

module.exports = validateDescription;
