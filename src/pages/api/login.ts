/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: User authentication endpoints
 */

/**
 * @swagger
 * /api/login:
 *   post:
 *     summary: Authenticate user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User authenticated successfully
 *       400:
 *         description: Invalid request body or authentication failed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *       405:
 *         description: Method Not Allowed
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */

import { NextApiRequest, NextApiResponse } from "next";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/src/firebase/clientApp";

const loginHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { email, password } = req.body;

    // Validate request body
    if (!email || !password) {
      return res.status(400).json({ error: "Invalid request body" });
    }

    try {
      const [signInWithEmailAndPassword, user, loading, error] =
        useSignInWithEmailAndPassword(auth);

      // Authenticate user using Firebase authentication
      await signInWithEmailAndPassword(email, password);

      // Return success response
      return res.status(200).end();
    } catch (error) {
      // Handle authentication errors
      return res.status(400).json({ error: "Authentication failed" });
    }
  }

  // Return an error for unsupported HTTP methods
  return res.status(405).json({ error: "Method Not Allowed" });
};

export default loginHandler;
