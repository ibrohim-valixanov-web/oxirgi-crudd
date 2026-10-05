const express = require("express");
const router = express.Router();
const controller = require("../controller/langController");

/**
 * @swagger
 * tags:
 *   name: Lang
 *   description: Lang management
 */

/**
 * @swagger
 * /api/langs:
 *   post:
 *     tags: [Lang]
 *     summary: Create a new Lang
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Lang created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/langs", controller.CreateLang);

/**
 * @swagger
 * /api/langs:
 *   get:
 *     tags: [Lang]
 *     summary: Get all Lang
 *     responses:
 *       200:
 *         description: List of Lang
 *       500:
 *         description: Server error
 */
router.get("/langs", controller.getLang);

/**
 * @swagger
 * /api/langs/search:
 *   get:
 *     tags: [Lang]
 *     summary: Search Lang
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
router.get("/langs/search", controller.searchLang);

/**
 * @swagger
 * /api/langs/{id}:
 *   get:
 *     tags: [Lang]
 *     summary: Get Lang by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Lang ID
 *     responses:
 *       200:
 *         description: Lang details
 *       404:
 *         description: Lang not found
 *       500:
 *         description: Server error
 */
router.get("/langs/:id", controller.getLangById);

/**
 * @swagger
 * /api/langs/{id}:
 *   put:
 *     tags: [Lang]
 *     summary: Update Lang by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Lang ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Lang updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Lang not found
 *       500:
 *         description: Server error
 */
router.put("/langs/:id", controller.UpdateLang);

/**
 * @swagger
 * /api/langs/{id}:
 *   delete:
 *     tags: [Lang]
 *     summary: Delete Lang by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Lang ID
 *     responses:
 *       200:
 *         description: Lang deleted
 *       404:
 *         description: Lang not found
 *       500:
 *         description: Server error
 */
router.delete("/langs/:id", controller.DeleteLang);

module.exports = router;
