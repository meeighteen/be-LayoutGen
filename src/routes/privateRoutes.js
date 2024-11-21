app.get("/protected", authenticateToken, (req, res) => {
  res.json({ message: "Accediste a una ruta protegida", user: req.user });
});
