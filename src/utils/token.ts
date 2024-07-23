import { V3 } from "paseto";
import { readFileSync } from "fs";
import { join } from "path";
const { sign } = V3;

const filePath = join("src", "utils", "keys", "privateKey.pem");

function loadPrivateKey(): string {
  return readFileSync(filePath, "utf8");
}

export const generateToken = async (data: any) => {
  try {
    const privateKey = loadPrivateKey();
    const token = await sign(data, privateKey, {
      issuer: "https://localhost:5000",
      audience: "http://localhost:5000",
      expiresIn: "2h",
    });
    return token;
  } catch (error: any) {
    console.error("Failed to generate token:", error.message);
    throw new Error("Failed to generate token");
  }
};

export const verifyToken = async (token: string) => {
  try {
    const privateKey = loadPrivateKey(); // Load the EC P-384 private key
    const result = await V3.verify(token, privateKey);
    return result;
  } catch (error: any) {
    console.error("Failed to verify token:", error.message);
    throw new Error("Failed to verify token");
  }
};
