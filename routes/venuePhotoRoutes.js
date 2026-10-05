const express = require("express");
const router = express.Router();
const controller = require("../controller/venuePhotoController");

/**
 * @swagger
 * tags:
 *   name: VenuePhoto
 *   description: VenuePhoto management
 */

/**
 * @swagger
 * /api/venue-photos:
 *   post:
 *     tags: [VenuePhoto]
 *     summary: Create a new VenuePhoto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               venue_id:
 *                 type: integer
 *               url:
 *                 type: string
 *     responses:
 *       201:
 *         description: VenuePhoto created
 *       400:
 *         description: Invalid input
 *       500:
 *         description: Server error
 */
router.post("/venue-photos", controller.CreateVenuePhoto);

/**
 * @swagger
 * /api/venue-photos:
 *   get:
 *     tags: [VenuePhoto]
 *     summary: Get all VenuePhoto
 *     responses:
 *       200:
 *         description: List of VenuePhoto
 *       500:
 *         description: Server error
 */
router.get("/venue-photos", controller.getVenuePhoto);

/**
 * @swagger
 * /api/venue-photos/search:
 *   get:
 *     tags: [VenuePhoto]
 *     summary: Search VenuePhoto
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
router.get("/venue-photos/search", controller.searchVenuePhoto);

/**
 * @swagger
 * /api/venue-photos/{id}:
 *   get:
 *     tags: [VenuePhoto]
 *     summary: Get VenuePhoto by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: VenuePhoto ID
 *     responses:
 *       200:
 *         description: VenuePhoto details
 *       404:
 *         description: VenuePhoto not found
 *       500:
 *         description: Server error
 */
router.get("/venue-photos/:id", controller.getVenuePhotoById);

/**
 * @swagger
 * /api/venue-photos/{id}:
 *   put:
 *     tags: [VenuePhoto]
 *     summary: Update VenuePhoto by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: VenuePhoto ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               venue_id:
 *                 type: integer
 *               url:
 *                 type: string
 *     responses:
 *       200:
 *         description: VenuePhoto updated
 *       400:
 *         description: Invalid input
 *       404:
 *         description: VenuePhoto not found
 *       500:
 *         description: Server error
 */
router.put("/venue-photos/:id", controller.UpdateVenuePhoto);

/**
 * @swagger
 * /api/venue-photos/{id}:
 *   delete:
 *     tags: [VenuePhoto]
 *     summary: Delete VenuePhoto by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: VenuePhoto ID
 *     responses:
 *       200:
 *         description: VenuePhoto deleted
 *       404:
 *         description: VenuePhoto not found
 *       500:
 *         description: Server error
 */
router.delete("/venue-photos/:id", controller.DeleteVenuePhoto);

module.exports = router;
