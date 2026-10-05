const express = require("express");
const router = express.Router();
const controller = require("../controller/sectorController");

/**
 * @swagger
 * tags:
 *   name: Sector
 *   description: Sector management
 */

/**
 * @swagger
 * /api/sectors:
 *   post:
 *     tags: [Sector]
 *     summary: Create a new Sector
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sector_name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Sector created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/sectors", controller.CreateSector);

/**
 * @swagger
 * /api/sectors:
 *   get:
 *     tags: [Sector]
 *     summary: Get all Sector
 *     responses:
 *       200:
 *         description: List of Sector
 *       500:
 *         description: Server error
 */
router.get("/sectors", controller.getSector);

/**
 * @swagger
 * /api/sectors/search:
 *   get:
 *     tags: [Sector]
 *     summary: Search Sector
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
router.get("/sectors/search", controller.searchSector);

/**
 * @swagger
 * /api/sectors/{id}:
 *   get:
 *     tags: [Sector]
 *     summary: Get Sector by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Sector ID
 *     responses:
 *       200:
 *         description: Sector details
 *       404:
 *         description: Sector not found
 *       500:
 *         description: Server error
 */
router.get("/sectors/:id", controller.getSectorById);

/**
 * @swagger
 * /api/sectors/{id}:
 *   put:
 *     tags: [Sector]
 *     summary: Update Sector by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Sector ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               sector_name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Sector updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Sector not found
 *       500:
 *         description: Server error
 */
router.put("/sectors/:id", controller.UpdateSector);

/**
 * @swagger
 * /api/sectors/{id}:
 *   delete:
 *     tags: [Sector]
 *     summary: Delete Sector by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Sector ID
 *     responses:
 *       200:
 *         description: Sector deleted
 *       404:
 *         description: Sector not found
 *       500:
 *         description: Server error
 */
router.delete("/sectors/:id", controller.DeleteSector);

module.exports = router;
