const authenticateToken = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Extrae el token del encabezado

  if (!token) return res.status(401).json({ message: "Token requerido" });

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ message: "Token inválido" });

    req.user = user; // Agrega la información del usuario al request
    next();
  });
};
