import { sign } from "jsonwebtoken";

export const GenerateJWT = async (payload) => {
  const token = await sign(payload, "Est0e$MiPubLikK3y!EslaLlave", {
    expiresIn: "8h",
  });
  return token;
};
