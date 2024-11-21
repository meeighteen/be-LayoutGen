import { validationResult, check } from "express-validator";

export const validateLoginFields = [
  check("email")
    .isEmail()
    .withMessage("Debe proporcionar un email válido")
    .notEmpty()
    .withMessage("El email es requerido"),

  check("password")
    .isLength({ min: 6 })
    .withMessage("La contraseña debe tener al menos 6 caracteres")
    .notEmpty()
    .withMessage("La contraseña es requerida"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
