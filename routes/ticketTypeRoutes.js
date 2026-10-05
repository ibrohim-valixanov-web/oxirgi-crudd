const express = require("express");
const router = express.Router();
const controller = require("../controller/ticketTypeController");

/**
 * @swagger
 * tags:
 *   name: TicketType
 *   description: TicketType management
 */

/**
 * @swagger
 * /api/ticket-types:
 *   post:
 *     tags: [TicketType]
 *     summary: Create a new TicketType
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ticket_type:
 *                 type: string
 *     responses:
 *       201:
 *         description: TicketType created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/ticket-types", controller.CreateTicketType);

/**
 * @swagger
 * /api/ticket-types:
 *   get:
 *     tags: [TicketType]
 *     summary: Get all TicketType
 *     responses:
 *       200:
 *         description: List of TicketType
 *       500:
 *         description: Server error
 */
router.get("/ticket-types", controller.getTicketType);

/**
 * @swagger
 * /api/ticket-types/search:
 *   get:
 *     tags: [TicketType]
 *     summary: Search TicketType
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
router.get("/ticket-types/search", controller.searchTicketType);

/**
 * @swagger
 * /api/ticket-types/{id}:
 *   get:
 *     tags: [TicketType]
 *     summary: Get TicketType by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: TicketType ID
 *     responses:
 *       200:
 *         description: TicketType details
 *       404:
 *         description: TicketType not found
 *       500:
 *         description: Server error
 */
router.get("/ticket-types/:id", controller.getTicketTypeById);

/**
 * @swagger
 * /api/ticket-types/{id}:
 *   put:
 *     tags: [TicketType]
 *     summary: Update TicketType by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: TicketType ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ticket_type:
 *                 type: string
 *     responses:
 *       200:
 *         description: TicketType updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: TicketType not found
 *       500:
 *         description: Server error
 */
router.put("/ticket-types/:id", controller.UpdateTicketType);

/**
 * @swagger
 * /api/ticket-types/{id}:
 *   delete:
 *     tags: [TicketType]
 *     summary: Delete TicketType by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: TicketType ID
 *     responses:
 *       200:
 *         description: TicketType deleted
 *       404:
 *         description: TicketType not found
 *       500:
 *         description: Server error
 */
router.delete("/ticket-types/:id", controller.DeleteTicketType);

module.exports = router;
