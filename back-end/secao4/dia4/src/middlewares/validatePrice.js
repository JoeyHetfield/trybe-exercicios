const validatePrice = (req, res, next) => {
  const price = parseFloat(req.body.price);
  if (Number.isNaN(price)) {
    res.status(400).json({ message: 'O campo price é obrigatório e precisa ser um número' });
  } else if (price < 0) {
    res.status(400).json({ message: 'O campo price não pode ser menor que 0' });
  } else {
    next();
  }
  };

module.exports = validatePrice;
