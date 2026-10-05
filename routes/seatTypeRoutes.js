const express = require("express");
const router = express.Router();
const controller = require("../controller/seatTypeController");

/**
 * @swagger
 * tags:
 *   name: SeatType
 *   description: SeatType management
 */

/**
 * @swagger
 * /api/seat-types:
 *   post:
 *     tags: [SeatType]
 *     summary: Create a new SeatType
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
 *         description: SeatType created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/seat-types", controller.CreateSeatType);

/**
 * @swagger
 * /api/seat-types:
 *   get:
 *     tags: [SeatType]
 *     summary: Get all SeatType
 *     responses:
 *       200:
 *         description: List of SeatType
 *       500:
 *         description: Server error
 */
router.get("/seat-types", controller.getSeatType);

/**
 * @swagger
 * /api/seat-types/search:
 *   get:
 *     tags: [SeatType]
 *     summary: Search SeatType
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
router.get("/seat-types/search", controller.searchSeatType);

/**
 * @swagger
 * /api/seat-types/{id}:
 *   get:
 *     tags: [SeatType]
 *     summary: Get SeatType by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: SeatType ID
 *     responses:
 *       200:
 *         description: SeatType details
 *       404:
 *         description: SeatType not found
 *       500:
 *         description: Server error
 */
router.get("/seat-types/:id", controller.getSeatTypeById);

/**
 * @swagger
 * /api/seat-types/{id}:
 *   put:
 *     tags: [SeatType]
 *     summary: Update SeatType by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: SeatType ID
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
 *         description: SeatType updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: SeatType not found
 *       500:
 *         description: Server error
 */
router.put("/seat-types/:id", controller.UpdateSeatType);

/**
 * @swagger
 * /api/seat-types/{id}:
 *   delete:
 *     tags: [SeatType]
 *     summary: Delete SeatType by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: SeatType ID
 *     responses:
 *       200:
 *         description: SeatType deleted
 *       404:
 *         description: SeatType not found
 *       500:
 *         description: Server error
 */
router.delete("/seat-types/:id", controller.DeleteSeatType);

module.exports = router;
