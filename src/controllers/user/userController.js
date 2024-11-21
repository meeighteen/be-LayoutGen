import jsonwebtoken from "jsonwebtoken";
import UserService from "../../services/user/user.service";
import bcrypt from "bcrypt";

const SECRET_KEY = process.env.SECRET_KEY || "asdfgh";

export const registerUser = async (req, res) => {
  const { email, password } = req.body;

  const Users = await UserService.getUsers();

  const userExists = Users.find((user) => user.email === email);
  if (userExists)
    return res.status(400).json({ message: "El usuario ya existe" });

  const hashedPassword = await bcrypt.hash(password, 10);

  await UserService.createUser({ email, password: hashedPassword });

  res.status(201).json({ message: "Usuario registrado exitosamente" });
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const Users = await UserService.getUsers();
  const user = Users.find((user) => user.email === email);

  if (!user) return res.status(400).json({ message: "Credenciales inválidas" });

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid)
    return res.status(400).json({ message: "Credenciales inválidas" });

  // Genera el JWT
  const token = jsonwebtoken.sign({ email }, SECRET_KEY, {
    expiresIn: "1h",
  });
  res.json({ token });
};
