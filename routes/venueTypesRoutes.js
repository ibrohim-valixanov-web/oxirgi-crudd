const express = require("express");
const router = express.Router();
const controller = require("../controller/venueTypesController");

/**
 * @swagger
 * tags:
 *   name: VenueTypes
 *   description: VenueTypes management
 */

/**
 * @swagger
 * /api/venue-types:
 *   post:
 *     tags: [VenueTypes]
 *     summary: Create a new VenueTypes
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               venue_id:
 *                 type: integer
 *               type_id:
 *                 type: integer
 *     responses:
 *       201:
 *         description: VenueTypes created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/venue-types", controller.CreateVenueTypes);

/**
 * @swagger
 * /api/venue-types:
 *   get:
 *     tags: [VenueTypes]
 *     summary: Get all VenueTypes
 *     responses:
 *       200:
 *         description: List of VenueTypes
 *       500:
 *         description: Server error
 */
router.get("/venue-types", controller.getVenueTypes);

/**
 * @swagger
 * /api/venue-types/{id}:
 *   get:
 *     tags: [VenueTypes]
 *     summary: Get VenueTypes by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: VenueTypes ID
 *     responses:
 *       200:
 *         description: VenueTypes details
 *       404:
 *         description: VenueTypes not found
 *       500:
 *         description: Server error
 */
router.get("/venue-types/:id", controller.getVenueTypesById);

/**
 * @swagger
 * /api/venue-types/{id}:
 *   put:
 *     tags: [VenueTypes]
 *     summary: Update VenueTypes by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: VenueTypes ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               venue_id:
 *                 type: integer
 *               type_id:
 *                 type: integer
 *     responses:
 *       200:
 *         description: VenueTypes updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: VenueTypes not found
 *       500:
 *         description: Server error
 */
router.put("/venue-types/:id", controller.UpdateVenueTypes);

/**
 * @swagger
 * /api/venue-types/{id}:
 *   delete:
 *     tags: [VenueTypes]
 *     summary: Delete VenueTypes by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: VenueTypes ID
 *     responses:
 *       200:
 *         description: VenueTypes deleted
 *       404:
 *         description: VenueTypes not found
 *       500:
 *         description: Server error
 */
router.delete("/venue-types/:id", controller.DeleteVenueTypes);

module.exports = router;
