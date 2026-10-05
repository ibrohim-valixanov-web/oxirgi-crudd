const express = require("express");
const router = express.Router();
const controller = require("../controller/cartItemController");

/**
 * @swagger
 * tags:
 *   name: CartItem
 *   description: CartItem management
 */

/**
 * @swagger
 * /api/cart-items:
 *   post:
 *     tags: [CartItem]
 *     summary: Create a new CartItem
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ticket_id:
 *                 type: integer
 *               cart_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: CartItem created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/cart-items", controller.CreateCartItem);

/**
 * @swagger
 * /api/cart-items:
 *   get:
 *     tags: [CartItem]
 *     summary: Get all CartItem
 *     responses:
 *       200:
 *         description: List of CartItem
 *       500:
 *         description: Server error
 */
router.get("/cart-items", controller.getCartItem);

/**
 * @swagger
 * /api/cart-items/{id}:
 *   get:
 *     tags: [CartItem]
 *     summary: Get CartItem by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: CartItem ID
 *     responses:
 *       200:
 *         description: CartItem details
 *       404:
 *         description: CartItem not found
 *       500:
 *         description: Server error
 */
router.get("/cart-items/:id", controller.getCartItemById);

/**
 * @swagger
 * /api/cart-items/{id}:
 *   put:
 *     tags: [CartItem]
 *     summary: Update CartItem by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: CartItem ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               ticket_id:
 *                 type: integer
 *               cart_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: CartItem updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: CartItem not found
 *       500:
 *         description: Server error
 */
router.put("/cart-items/:id", controller.UpdateCartItem);

/**
 * @swagger
 * /api/cart-items/{id}:
 *   delete:
 *     tags: [CartItem]
 *     summary: Delete CartItem by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: CartItem ID
 *     responses:
 *       200:
 *         description: CartItem deleted
 *       404:
 *         description: CartItem not found
 *       500:
 *         description: Server error
 */
router.delete("/cart-items/:id", controller.DeleteCartItem);

module.exports = router;
