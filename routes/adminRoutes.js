const express = require("express");
const router = express.Router();
const controller = require("../controller/adminController");

/**
 * @swagger
 * tags:
 *   name: Admin
 *   description: Admin management
 */

/**
 * @swagger
 * /api/admins:
 *   post:
 *     tags: [Admin]
 *     summary: Create a new Admin
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               login:
 *                 type: string
 *               hashed_password:
 *                 type: string
 *               is_active:
 *                 type: boolean
 *               is_creator:
 *                 type: boolean
 *               hashed_refresh_token:
 *                 type: string
 *     responses:
 *       201:
 *         description: Admin created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/admins", controller.CreateAdmin);

/**
 * @swagger
 * /api/admins:
 *   get:
 *     tags: [Admin]
 *     summary: Get all Admin
 *     responses:
 *       200:
 *         description: List of Admin
 *       500:
 *         description: Server error
 */
router.get("/admins", controller.getAdmin);

/**
 * @swagger
 * /api/admins/search:
 *   get:
 *     tags: [Admin]
 *     summary: Search Admin
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
router.get("/admins/search", controller.searchAdmin);

/**
 * @swagger
 * /api/admins/{id}:
 *   get:
 *     tags: [Admin]
 *     summary: Get Admin by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Admin ID
 *     responses:
 *       200:
 *         description: Admin details
 *       404:
 *         description: Admin not found
 *       500:
 *         description: Server error
 */
router.get("/admins/:id", controller.getAdminById);

/**
 * @swagger
 * /api/admins/{id}:
 *   put:
 *     tags: [Admin]
 *     summary: Update Admin by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Admin ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               login:
 *                 type: string
 *               hashed_password:
 *                 type: string
 *               is_active:
 *                 type: boolean
 *               is_creator:
 *                 type: boolean
 *               hashed_refresh_token:
 *                 type: string
 *     responses:
 *       200:
 *         description: Admin updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Admin not found
 *       500:
 *         description: Server error
 */
router.put("/admins/:id", controller.UpdateAdmin);

/**
 * @swagger
 * /api/admins/{id}:
 *   delete:
 *     tags: [Admin]
 *     summary: Delete Admin by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Admin ID
 *     responses:
 *       200:
 *         description: Admin deleted
 *       404:
 *         description: Admin not found
 *       500:
 *         description: Server error
 */
router.delete("/admins/:id", controller.DeleteAdmin);

module.exports = router;
