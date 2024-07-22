import paseto, { V4 } from "paseto";

const {
  V4: { sign, generateKey },
} = paseto;

export async function getSymmetricKey() {
  const symmetricKey = await generateKey("public");
  return symmetricKey;
}
