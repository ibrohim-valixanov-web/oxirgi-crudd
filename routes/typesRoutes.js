const express = require("express");
const router = express.Router();
const controller = require("../controller/typesController");

/**
 * @swagger
 * tags:
 *   name: Types
 *   description: Types management
 */

/**
 * @swagger
 * /api/types:
 *   post:
 *     tags: [Types]
 *     summary: Create a new Types
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
 *         description: Types created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/types", controller.CreateTypes);

/**
 * @swagger
 * /api/types:
 *   get:
 *     tags: [Types]
 *     summary: Get all Types
 *     responses:
 *       200:
 *         description: List of Types
 *       500:
 *         description: Server error
 */
router.get("/types", controller.getTypes);

/**
 * @swagger
 * /api/types/search:
 *   get:
 *     tags: [Types]
 *     summary: Search Types
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
router.get("/types/search", controller.searchTypes);

/**
 * @swagger
 * /api/types/{id}:
 *   get:
 *     tags: [Types]
 *     summary: Get Types by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Types ID
 *     responses:
 *       200:
 *         description: Types details
 *       404:
 *         description: Types not found
 *       500:
 *         description: Server error
 */
router.get("/types/:id", controller.getTypesById);

/**
 * @swagger
 * /api/types/{id}:
 *   put:
 *     tags: [Types]
 *     summary: Update Types by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Types ID
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
 *         description: Types updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Types not found
 *       500:
 *         description: Server error
 */
router.put("/types/:id", controller.UpdateTypes);

/**
 * @swagger
 * /api/types/{id}:
 *   delete:
 *     tags: [Types]
 *     summary: Delete Types by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Types ID
 *     responses:
 *       200:
 *         description: Types deleted
 *       404:
 *         description: Types not found
 *       500:
 *         description: Server error
 */
router.delete("/types/:id", controller.DeleteTypes);

module.exports = router;
