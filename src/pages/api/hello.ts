import openai from "@/src/utils/openai";
import type { NextApiRequest, NextApiResponse } from "next";
type Data = {
  name: string;
};
/**
 * @swagger
 * /api/hello:
 *   get:
 *     description: Returns the hello world
 *     responses:
 *       200:
 *         description: hello world
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: "Hello world",
  });
  const resp = completion.data.choices[0].text;
  res.status(200).json({ resp });
}
