function logger(req, res, next) {
  console.log(`🚀 ~ method:`, req.method); // Muestra el método (GET, POST, etc.)
  console.log(`🚀 ~ url:`, req.url);       // Muestra la URL que se pidió
  next(); // Continúa con la siguiente función (si no lo ponés, queda trabado)
}

export default logger;
