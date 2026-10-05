const express = require("express");
const router = express.Router();
const controller = require("../controller/customerController");

/**
 * @swagger
 * tags:
 *   name: Customer
 *   description: Customer management
 */

/**
 * @swagger
 * /api/customers:
 *   post:
 *     tags: [Customer]
 *     summary: Create a new Customer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               phone:
 *                 type: string
 *               hashed_password:
 *                 type: string
 *               email:
 *                 type: string
 *               birth_date:
 *                 type: string
 *               gender_id:
 *                 type: integer
 *               lang_id:
 *                 type: integer
 *               hashed_refresh_token:
 *                 type: string
 *     responses:
 *       201:
 *         description: Customer created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/customers", controller.CreateCustomer);

/**
 * @swagger
 * /api/customers:
 *   get:
 *     tags: [Customer]
 *     summary: Get all Customer
 *     responses:
 *       200:
 *         description: List of Customer
 *       500:
 *         description: Server error
 */
router.get("/customers", controller.getCustomer);

/**
 * @swagger
 * /api/customers/search:
 *   get:
 *     tags: [Customer]
 *     summary: Search Customer
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
router.get("/customers/search", controller.searchCustomer);

/**
 * @swagger
 * /api/customers/{id}:
 *   get:
 *     tags: [Customer]
 *     summary: Get Customer by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Customer ID
 *     responses:
 *       200:
 *         description: Customer details
 *       404:
 *         description: Customer not found
 *       500:
 *         description: Server error
 */
router.get("/customers/:id", controller.getCustomerById);

/**
 * @swagger
 * /api/customers/{id}:
 *   put:
 *     tags: [Customer]
 *     summary: Update Customer by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Customer ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               first_name:
 *                 type: string
 *               last_name:
 *                 type: string
 *               phone:
 *                 type: string
 *               hashed_password:
 *                 type: string
 *               email:
 *                 type: string
 *               birth_date:
 *                 type: string
 *               gender_id:
 *                 type: integer
 *               lang_id:
 *                 type: integer
 *               hashed_refresh_token:
 *                 type: string
 *     responses:
 *       200:
 *         description: Customer updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Customer not found
 *       500:
 *         description: Server error
 */
router.put("/customers/:id", controller.UpdateCustomer);

/**
 * @swagger
 * /api/customers/{id}:
 *   delete:
 *     tags: [Customer]
 *     summary: Delete Customer by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Customer ID
 *     responses:
 *       200:
 *         description: Customer deleted
 *       404:
 *         description: Customer not found
 *       500:
 *         description: Server error
 */
router.delete("/customers/:id", controller.DeleteCustomer);

module.exports = router;
