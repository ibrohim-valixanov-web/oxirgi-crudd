const express = require("express");
const router = express.Router();
const controller = require("../controller/discountController");

/**
 * @swagger
 * tags:
 *   name: Discount
 *   description: Discount management
 */

/**
 * @swagger
 * /api/discounts:
 *   post:
 *     tags: [Discount]
 *     summary: Create a new Discount
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               discount:
 *                 type: string
 *               finish_date:
 *                 type: string
 *     responses:
 *       201:
 *         description: Discount created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/discounts", controller.CreateDiscount);

/**
 * @swagger
 * /api/discounts:
 *   get:
 *     tags: [Discount]
 *     summary: Get all Discount
 *     responses:
 *       200:
 *         description: List of Discount
 *       500:
 *         description: Server error
 */
router.get("/discounts", controller.getDiscount);

/**
 * @swagger
 * /api/discounts/search:
 *   get:
 *     tags: [Discount]
 *     summary: Search Discount
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
router.get("/discounts/search", controller.searchDiscount);

/**
 * @swagger
 * /api/discounts/{id}:
 *   get:
 *     tags: [Discount]
 *     summary: Get Discount by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Discount ID
 *     responses:
 *       200:
 *         description: Discount details
 *       404:
 *         description: Discount not found
 *       500:
 *         description: Server error
 */
router.get("/discounts/:id", controller.getDiscountById);

/**
 * @swagger
 * /api/discounts/{id}:
 *   put:
 *     tags: [Discount]
 *     summary: Update Discount by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Discount ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               discount:
 *                 type: string
 *               finish_date:
 *                 type: string
 *     responses:
 *       200:
 *         description: Discount updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Discount not found
 *       500:
 *         description: Server error
 */
router.put("/discounts/:id", controller.UpdateDiscount);

/**
 * @swagger
 * /api/discounts/{id}:
 *   delete:
 *     tags: [Discount]
 *     summary: Delete Discount by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Discount ID
 *     responses:
 *       200:
 *         description: Discount deleted
 *       404:
 *         description: Discount not found
 *       500:
 *         description: Server error
 */
router.delete("/discounts/:id", controller.DeleteDiscount);

module.exports = router;
