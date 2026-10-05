const express = require("express");
const router = express.Router();
const controller = require("../controller/userController");

/**
 * @swagger
 * tags:
 *   name: User
 *   description: User management
 */

/**
 * @swagger
 * /api/users:
 *   post:
 *     tags: [User]
 *     summary: Create a new User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               customer_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: User created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/users", controller.CreateUser);

/**
 * @swagger
 * /api/users:
 *   get:
 *     tags: [User]
 *     summary: Get all User
 *     responses:
 *       200:
 *         description: List of User
 *       500:
 *         description: Server error
 */
router.get("/users", controller.getUser);

/**
 * @swagger
 * /api/users/search:
 *   get:
 *     tags: [User]
 *     summary: Search User
 *     parameters:
 *       - in: query
 *         name: query
 *         schema:
 *           type: string
 *         required: true
 *         description: Search query
 *     responses:
 *       200:
 *         description: List of items matching the search
 *       400:
 *         description: Search query is required
 *       500:
 *         description: Server error
 */
router.get("/users/search", controller.searchUser);

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     tags: [User]
 *     summary: Get User by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: User ID
 *     responses:
 *       200:
 *         description: User details
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */
router.get("/users/:id", controller.getUserById);

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     tags: [User]
 *     summary: Update User by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: User ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               customer_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: User updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */
router.put("/users/:id", controller.UpdateUser);

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     tags: [User]
 *     summary: Delete User by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: User ID
 *     responses:
 *       200:
 *         description: User deleted
 *       404:
 *         description: User not found
 *       500:
 *         description: Server error
 */
router.delete("/users/:id", controller.DeleteUser);

module.exports = router;
