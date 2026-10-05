const express = require("express");
const router = express.Router();
const controller = require("../controller/countryController");

/**
 * @swagger
 * tags:
 *   name: Country
 *   description: Country management
 */

/**
 * @swagger
 * /api/countries:
 *   post:
 *     tags: [Country]
 *     summary: Create a new Country
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               country_name:
 *                 type: string
 *     responses:
 *       201:
 *         description: Country created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/countries", controller.CreateCountry);

/**
 * @swagger
 * /api/countries:
 *   get:
 *     tags: [Country]
 *     summary: Get all Country
 *     responses:
 *       200:
 *         description: List of Country
 *       500:
 *         description: Server error
 */
router.get("/countries", controller.getCountry);

/**
 * @swagger
 * /api/countries/search:
 *   get:
 *     tags: [Country]
 *     summary: Search Country
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
router.get("/countries/search", controller.searchCountry);

/**
 * @swagger
 * /api/countries/{id}:
 *   get:
 *     tags: [Country]
 *     summary: Get Country by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Country ID
 *     responses:
 *       200:
 *         description: Country details
 *       404:
 *         description: Country not found
 *       500:
 *         description: Server error
 */
router.get("/countries/:id", controller.getCountryById);

/**
 * @swagger
 * /api/countries/{id}:
 *   put:
 *     tags: [Country]
 *     summary: Update Country by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Country ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               country_name:
 *                 type: string
 *     responses:
 *       200:
 *         description: Country updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: Country not found
 *       500:
 *         description: Server error
 */
router.put("/countries/:id", controller.UpdateCountry);

/**
 * @swagger
 * /api/countries/{id}:
 *   delete:
 *     tags: [Country]
 *     summary: Delete Country by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Country ID
 *     responses:
 *       200:
 *         description: Country deleted
 *       404:
 *         description: Country not found
 *       500:
 *         description: Server error
 */
router.delete("/countries/:id", controller.DeleteCountry);

module.exports = router;
