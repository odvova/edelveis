import { NextApiRequest, NextApiResponse } from "next";
import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Next.js Swagger API",
      version: "1.0.0",
    },
  },
  apis: [
    "./src/pages/api/hello.ts",
    "./src/pages/api/signup.ts",
    "./src/pages/api/login.ts",
  ],
};

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  const swaggerSpec = swaggerJsdoc(options);
  res.status(200).json(swaggerSpec);
};

export default handler;
