function register(req, res, next) {
  const { name, lastname } = req.body;
  if (!name || !lastname) {
    return res.status(400).send({
      message: "Faltan datos",
    });
  }
  next(); // Si todo está bien, sigue
}

export default register;
