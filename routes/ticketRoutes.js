const express = require("express");
const router = express.Router();
const controller = require("../controller/ticketController");

/**
 * @swagger
 * tags:
 *   name: Ticket
 *   description: Ticket management
 */

/**
 * @swagger
 * /api/tickets:
 *   post:
 *     tags: [Ticket]
 *     summary: Create a new Ticket
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               event_id:
 *                 type: integer
 *               seat_id:
 *                 type: integer
 *               price:
 *                 type: number
 *               service_fee:
 *                 type: number
 *               status_id:
 *                 type: integer
 *               ticket_type_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Ticket created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/tickets", controller.CreateTicket);

/**
 * @swagger
 * /api/tickets:
 *   get:
 *     tags: [Ticket]
 *     summary: Get all Ticket
 *     responses:
 *       200:
 *         description: List of Ticket
 *       500:
 *         description: Server error
 */
router.get("/tickets", controller.getTicket);

/**
 * @swagger
 * /api/tickets/{id}:
 *   get:
 *     tags: [Ticket]
 *     summary: Get Ticket by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Ticket ID
 *     responses:
 *       200:
 *         description: Ticket details
 *       404:
 *         description: Ticket not found
 *       500:
 *         description: Server error
 */
router.get("/tickets/:id", controller.getTicketById);

/**
 * @swagger
 * /api/tickets/{id}:
 *   put:
 *     tags: [Ticket]
 *     summary: Update Ticket by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Ticket ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               event_id:
 *                 type: integer
 *               seat_id:
 *                 type: integer
 *               price:
 *                 type: number
 *               service_fee:
 *                 type: number
 *               status_id:
 *                 type: integer
 *               ticket_type_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Ticket updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Ticket not found
 *       500:
 *         description: Server error
 */
router.put("/tickets/:id", controller.UpdateTicket);

/**
 * @swagger
 * /api/tickets/{id}:
 *   delete:
 *     tags: [Ticket]
 *     summary: Delete Ticket by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Ticket ID
 *     responses:
 *       200:
 *         description: Ticket deleted
 *       404:
 *         description: Ticket not found
 *       500:
 *         description: Server error
 */
router.delete("/tickets/:id", controller.DeleteTicket);

module.exports = router;
