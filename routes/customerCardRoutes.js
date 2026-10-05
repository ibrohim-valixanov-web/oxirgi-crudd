const express = require("express");
const router = express.Router();
const controller = require("../controller/customerCardController");

/**
 * @swagger
 * tags:
 *   name: CustomerCard
 *   description: CustomerCard management
 */

/**
 * @swagger
 * /api/customer-cards:
 *   post:
 *     tags: [CustomerCard]
 *     summary: Create a new CustomerCard
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customer_id:
 *                 type: integer
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *               number:
 *                 type: string
 *               year:
 *                 type: string
 *               month:
 *                 type: string
 *               is_active:
 *                 type: boolean
 *               is_main:
 *                 type: boolean
 *     responses:
 *       201:
 *         description: CustomerCard created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/customer-cards", controller.CreateCustomerCard);

/**
 * @swagger
 * /api/customer-cards:
 *   get:
 *     tags: [CustomerCard]
 *     summary: Get all CustomerCard
 *     responses:
 *       200:
 *         description: List of CustomerCard
 *       500:
 *         description: Server error
 */
router.get("/customer-cards", controller.getCustomerCard);

/**
 * @swagger
 * /api/customer-cards/search:
 *   get:
 *     tags: [CustomerCard]
 *     summary: Search CustomerCard
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
router.get("/customer-cards/search", controller.searchCustomerCard);

/**
 * @swagger
 * /api/customer-cards/{id}:
 *   get:
 *     tags: [CustomerCard]
 *     summary: Get CustomerCard by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: CustomerCard ID
 *     responses:
 *       200:
 *         description: CustomerCard details
 *       404:
 *         description: CustomerCard not found
 *       500:
 *         description: Server error
 */
router.get("/customer-cards/:id", controller.getCustomerCardById);

/**
 * @swagger
 * /api/customer-cards/{id}:
 *   put:
 *     tags: [CustomerCard]
 *     summary: Update CustomerCard by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: CustomerCard ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               customer_id:
 *                 type: integer
 *               name:
 *                 type: string
 *               phone:
 *                 type: string
 *               number:
 *                 type: string
 *               year:
 *                 type: string
 *               month:
 *                 type: string
 *               is_active:
 *                 type: boolean
 *               is_main:
 *                 type: boolean
 *     responses:
 *       200:
 *         description: CustomerCard updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: CustomerCard not found
 *       500:
 *         description: Server error
 */
router.put("/customer-cards/:id", controller.UpdateCustomerCard);

/**
 * @swagger
 * /api/customer-cards/{id}:
 *   delete:
 *     tags: [CustomerCard]
 *     summary: Delete CustomerCard by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: CustomerCard ID
 *     responses:
 *       200:
 *         description: CustomerCard deleted
 *       404:
 *         description: CustomerCard not found
 *       500:
 *         description: Server error
 */
router.delete("/customer-cards/:id", controller.DeleteCustomerCard);

module.exports = router;
