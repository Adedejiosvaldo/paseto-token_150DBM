import { V3 } from "paseto";

const { generateKey, sign } = V3;
export async function getSymmetricKey() {
  const symmetricKey = await generateKey("local");
  return symmetricKey;
}

export const generateToken = async (data: any) => {
  const token = await sign(data, "privateKey");
};
