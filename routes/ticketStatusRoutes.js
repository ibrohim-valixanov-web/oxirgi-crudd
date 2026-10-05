const express = require("express");
const router = express.Router();
const controller = require("../controller/ticketStatusController");

/**
 * @swagger
 * tags:
 *   name: TicketStatus
 *   description: TicketStatus management
 */

/**
 * @swagger
 * /api/ticket-statuses:
 *   post:
 *     tags: [TicketStatus]
 *     summary: Create a new TicketStatus
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
 *         description: TicketStatus created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/ticket-statuses", controller.CreateTicketStatus);

/**
 * @swagger
 * /api/ticket-statuses:
 *   get:
 *     tags: [TicketStatus]
 *     summary: Get all TicketStatus
 *     responses:
 *       200:
 *         description: List of TicketStatus
 *       500:
 *         description: Server error
 */
router.get("/ticket-statuses", controller.getTicketStatus);

/**
 * @swagger
 * /api/ticket-statuses/search:
 *   get:
 *     tags: [TicketStatus]
 *     summary: Search TicketStatus
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
router.get("/ticket-statuses/search", controller.searchTicketStatus);

/**
 * @swagger
 * /api/ticket-statuses/{id}:
 *   get:
 *     tags: [TicketStatus]
 *     summary: Get TicketStatus by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: TicketStatus ID
 *     responses:
 *       200:
 *         description: TicketStatus details
 *       404:
 *         description: TicketStatus not found
 *       500:
 *         description: Server error
 */
router.get("/ticket-statuses/:id", controller.getTicketStatusById);

/**
 * @swagger
 * /api/ticket-statuses/{id}:
 *   put:
 *     tags: [TicketStatus]
 *     summary: Update TicketStatus by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: TicketStatus ID
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
 *         description: TicketStatus updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: TicketStatus not found
 *       500:
 *         description: Server error
 */
router.put("/ticket-statuses/:id", controller.UpdateTicketStatus);

/**
 * @swagger
 * /api/ticket-statuses/{id}:
 *   delete:
 *     tags: [TicketStatus]
 *     summary: Delete TicketStatus by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: TicketStatus ID
 *     responses:
 *       200:
 *         description: TicketStatus deleted
 *       404:
 *         description: TicketStatus not found
 *       500:
 *         description: Server error
 */
router.delete("/ticket-statuses/:id", controller.DeleteTicketStatus);

module.exports = router;
