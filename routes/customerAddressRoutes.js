const express = require("express");
const router = express.Router();
const controller = require("../controller/customerAddressController");

/**
 * @swagger
 * tags:
 *   name: CustomerAddress
 *   description: CustomerAddress management
 */

/**
 * @swagger
 * /api/customer-addresses:
 *   post:
 *     tags: [CustomerAddress]
 *     summary: Create a new CustomerAddress
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
 *               region_id:
 *                 type: integer
 *               district_id:
 *                 type: integer
 *               street:
 *                 type: string
 *               house:
 *                 type: string
 *               flat_id:
 *                 type: integer
 *               location:
 *                 type: string
 *               post_index:
 *                 type: string
 *               info:
 *                 type: string
 *     responses:
 *       201:
 *         description: CustomerAddress created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/customer-addresses", controller.CreateCustomerAddress);

/**
 * @swagger
 * /api/customer-addresses:
 *   get:
 *     tags: [CustomerAddress]
 *     summary: Get all CustomerAddress
 *     responses:
 *       200:
 *         description: List of CustomerAddress
 *       500:
 *         description: Server error
 */
router.get("/customer-addresses", controller.getCustomerAddress);

/**
 * @swagger
 * /api/customer-addresses/search:
 *   get:
 *     tags: [CustomerAddress]
 *     summary: Search CustomerAddress
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
router.get("/customer-addresses/search", controller.searchCustomerAddress);

/**
 * @swagger
 * /api/customer-addresses/{id}:
 *   get:
 *     tags: [CustomerAddress]
 *     summary: Get CustomerAddress by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: CustomerAddress ID
 *     responses:
 *       200:
 *         description: CustomerAddress details
 *       404:
 *         description: CustomerAddress not found
 *       500:
 *         description: Server error
 */
router.get("/customer-addresses/:id", controller.getCustomerAddressById);

/**
 * @swagger
 * /api/customer-addresses/{id}:
 *   put:
 *     tags: [CustomerAddress]
 *     summary: Update CustomerAddress by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: CustomerAddress ID
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
 *               region_id:
 *                 type: integer
 *               district_id:
 *                 type: integer
 *               street:
 *                 type: string
 *               house:
 *                 type: string
 *               flat_id:
 *                 type: integer
 *               location:
 *                 type: string
 *               post_index:
 *                 type: string
 *               info:
 *                 type: string
 *     responses:
 *       200:
 *         description: CustomerAddress updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: CustomerAddress not found
 *       500:
 *         description: Server error
 */
router.put("/customer-addresses/:id", controller.UpdateCustomerAddress);

/**
 * @swagger
 * /api/customer-addresses/{id}:
 *   delete:
 *     tags: [CustomerAddress]
 *     summary: Delete CustomerAddress by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: CustomerAddress ID
 *     responses:
 *       200:
 *         description: CustomerAddress deleted
 *       404:
 *         description: CustomerAddress not found
 *       500:
 *         description: Server error
 */
router.delete("/customer-addresses/:id", controller.DeleteCustomerAddress);

module.exports = router;
