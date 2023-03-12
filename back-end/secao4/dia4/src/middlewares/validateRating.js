const validateRating = (req, res, next) => {
  const { rating } = req.body.description;
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    res.status(400).json({ message: 'deve ser um número entre 1 e 5' });
  } else next();
};

module.exports = validateRating;
