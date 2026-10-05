const express = require("express");
const router = express.Router();
const controller = require("../controller/districtController");

/**
 * @swagger
 * tags:
 *   name: District
 *   description: District management
 */

/**
 * @swagger
 * /api/districts:
 *   post:
 *     tags: [District]
 *     summary: Create a new District
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               region_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: District created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/districts", controller.CreateDistrict);

/**
 * @swagger
 * /api/districts:
 *   get:
 *     tags: [District]
 *     summary: Get all District
 *     responses:
 *       200:
 *         description: List of District
 *       500:
 *         description: Server error
 */
router.get("/districts", controller.getDistrict);

/**
 * @swagger
 * /api/districts/search:
 *   get:
 *     tags: [District]
 *     summary: Search District
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
router.get("/districts/search", controller.searchDistrict);

/**
 * @swagger
 * /api/districts/{id}:
 *   get:
 *     tags: [District]
 *     summary: Get District by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: District ID
 *     responses:
 *       200:
 *         description: District details
 *       404:
 *         description: District not found
 *       500:
 *         description: Server error
 */
router.get("/districts/:id", controller.getDistrictById);

/**
 * @swagger
 * /api/districts/{id}:
 *   put:
 *     tags: [District]
 *     summary: Update District by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: District ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               region_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: District updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: District not found
 *       500:
 *         description: Server error
 */
router.put("/districts/:id", controller.UpdateDistrict);

/**
 * @swagger
 * /api/districts/{id}:
 *   delete:
 *     tags: [District]
 *     summary: Delete District by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: District ID
 *     responses:
 *       200:
 *         description: District deleted
 *       404:
 *         description: District not found
 *       500:
 *         description: Server error
 */
router.delete("/districts/:id", controller.DeleteDistrict);

module.exports = router;
