import { request, response } from "express";
import { verify } from "jsonwebtoken";

export const ValidateJwt = (req = request, res = response, next) => {
  const token = req.header("x-token");
  if (!token) return res.status(401).json({ msg: "Invalid Token" });
  try {
    const payload = verify(token, "Est0e$MiPubLikK3y!EslaLlave");

    req.payload = payload;
    next();
  } catch (error) {
    return res.status(401).json({ msg: "Error Token" });
  }
};
