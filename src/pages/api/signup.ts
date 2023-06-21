/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: User authentication endpoints
 */

/**
 * @swagger
 * /api/signup:
 *   post:
 *     summary: Create a new user
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
 *               confirmPassword:
 *                 type: string
 *     responses:
 *       200:
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       400:
 *         description: Invalid request body or passwords do not match
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
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import firebaseConfig from "@/src/firebase/clientApp";

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

export default async function signUpHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { email, password, confirmPassword } = req.body;

    // Validate request body
    if (!email || !password || !confirmPassword) {
      return res.status(400).json({ error: "Invalid request body" });
    }

    // Additional validation logic
    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    try {
      const auth = getAuth(app); // Get the auth instance from the app

      // Create a new user using Firebase authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Return success response
      return res.status(200).json({ message: "User created successfully" });
    } catch (error) {
      // Handle any errors that occur during user creation
      return res.status(500).json({ error: "An error occurred" });
    }
  }

  // Return an error for unsupported HTTP methods
  return res.status(405).json({ error: "Method Not Allowed" });
}
