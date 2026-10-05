const express = require("express");
const router = express.Router();
const controller = require("../controller/flatController");

/**
 * @swagger
 * tags:
 *   name: Flat
 *   description: Flat management
 */

/**
 * @swagger
 * /api/flats:
 *   post:
 *     tags: [Flat]
 *     summary: Create a new Flat
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               etaj:
 *                 type: integer
 *               condition:
 *                 type: string
 *     responses:
 *       201:
 *         description: Flat created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/flats", controller.CreateFlat);

/**
 * @swagger
 * /api/flats:
 *   get:
 *     tags: [Flat]
 *     summary: Get all Flat
 *     responses:
 *       200:
 *         description: List of Flat
 *       500:
 *         description: Server error
 */
router.get("/flats", controller.getFlat);

/**
 * @swagger
 * /api/flats/search:
 *   get:
 *     tags: [Flat]
 *     summary: Search Flat
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
router.get("/flats/search", controller.searchFlat);

/**
 * @swagger
 * /api/flats/{id}:
 *   get:
 *     tags: [Flat]
 *     summary: Get Flat by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Flat ID
 *     responses:
 *       200:
 *         description: Flat details
 *       404:
 *         description: Flat not found
 *       500:
 *         description: Server error
 */
router.get("/flats/:id", controller.getFlatById);

/**
 * @swagger
 * /api/flats/{id}:
 *   put:
 *     tags: [Flat]
 *     summary: Update Flat by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Flat ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               etaj:
 *                 type: integer
 *               condition:
 *                 type: string
 *     responses:
 *       200:
 *         description: Flat updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Flat not found
 *       500:
 *         description: Server error
 */
router.put("/flats/:id", controller.UpdateFlat);

/**
 * @swagger
 * /api/flats/{id}:
 *   delete:
 *     tags: [Flat]
 *     summary: Delete Flat by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Flat ID
 *     responses:
 *       200:
 *         description: Flat deleted
 *       404:
 *         description: Flat not found
 *       500:
 *         description: Server error
 */
router.delete("/flats/:id", controller.DeleteFlat);

module.exports = router;
