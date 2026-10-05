const express = require("express");
const router = express.Router();
const controller = require("../controller/bookingController");

/**
 * @swagger
 * tags:
 *   name: Booking
 *   description: Booking management
 */

/**
 * @swagger
 * /api/bookings:
 *   post:
 *     tags: [Booking]
 *     summary: Create a new Booking
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cart_id:
 *                 type: integer
 *               createdAt:
 *                 type: string
 *               finished:
 *                 type: string
 *               payment_method_id:
 *                 type: integer
 *               delivery_method_id:
 *                 type: integer
 *               discount_id:
 *                 type: integer
 *               status_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Booking created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/bookings", controller.CreateBooking);

/**
 * @swagger
 * /api/bookings:
 *   get:
 *     tags: [Booking]
 *     summary: Get all Booking
 *     responses:
 *       200:
 *         description: List of Booking
 *       500:
 *         description: Server error
 */
router.get("/bookings", controller.getBooking);

/**
 * @swagger
 * /api/bookings/{id}:
 *   get:
 *     tags: [Booking]
 *     summary: Get Booking by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Booking ID
 *     responses:
 *       200:
 *         description: Booking details
 *       404:
 *         description: Booking not found
 *       500:
 *         description: Server error
 */
router.get("/bookings/:id", controller.getBookingById);

/**
 * @swagger
 * /api/bookings/{id}:
 *   put:
 *     tags: [Booking]
 *     summary: Update Booking by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Booking ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cart_id:
 *                 type: integer
 *               createdAt:
 *                 type: string
 *               finished:
 *                 type: string
 *               payment_method_id:
 *                 type: integer
 *               delivery_method_id:
 *                 type: integer
 *               discount_id:
 *                 type: integer
 *               status_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Booking updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Booking not found
 *       500:
 *         description: Server error
 */
router.put("/bookings/:id", controller.UpdateBooking);

/**
 * @swagger
 * /api/bookings/{id}:
 *   delete:
 *     tags: [Booking]
 *     summary: Delete Booking by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Booking ID
 *     responses:
 *       200:
 *         description: Booking deleted
 *       404:
 *         description: Booking not found
 *       500:
 *         description: Server error
 */
router.delete("/bookings/:id", controller.DeleteBooking);

module.exports = router;
