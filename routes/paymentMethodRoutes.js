const express = require("express");
const router = express.Router();
const controller = require("../controller/paymentMethodController");

/**
 * @swagger
 * tags:
 *   name: PaymentMethod
 *   description: PaymentMethod management
 */

/**
 * @swagger
 * /api/payment-methods:
 *   post:
 *     tags: [PaymentMethod]
 *     summary: Create a new PaymentMethod
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
 *         description: PaymentMethod created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/payment-methods", controller.CreatePaymentMethod);

/**
 * @swagger
 * /api/payment-methods:
 *   get:
 *     tags: [PaymentMethod]
 *     summary: Get all PaymentMethod
 *     responses:
 *       200:
 *         description: List of PaymentMethod
 *       500:
 *         description: Server error
 */
router.get("/payment-methods", controller.getPaymentMethod);

/**
 * @swagger
 * /api/payment-methods/search:
 *   get:
 *     tags: [PaymentMethod]
 *     summary: Search PaymentMethod
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
router.get("/payment-methods/search", controller.searchPaymentMethod);

/**
 * @swagger
 * /api/payment-methods/{id}:
 *   get:
 *     tags: [PaymentMethod]
 *     summary: Get PaymentMethod by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: PaymentMethod ID
 *     responses:
 *       200:
 *         description: PaymentMethod details
 *       404:
 *         description: PaymentMethod not found
 *       500:
 *         description: Server error
 */
router.get("/payment-methods/:id", controller.getPaymentMethodById);

/**
 * @swagger
 * /api/payment-methods/{id}:
 *   put:
 *     tags: [PaymentMethod]
 *     summary: Update PaymentMethod by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: PaymentMethod ID
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
 *         description: PaymentMethod updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: PaymentMethod not found
 *       500:
 *         description: Server error
 */
router.put("/payment-methods/:id", controller.UpdatePaymentMethod);

/**
 * @swagger
 * /api/payment-methods/{id}:
 *   delete:
 *     tags: [PaymentMethod]
 *     summary: Delete PaymentMethod by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: PaymentMethod ID
 *     responses:
 *       200:
 *         description: PaymentMethod deleted
 *       404:
 *         description: PaymentMethod not found
 *       500:
 *         description: Server error
 */
router.delete("/payment-methods/:id", controller.DeletePaymentMethod);

module.exports = router;
