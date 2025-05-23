/**
 * @swagger
 * tags:
 *   name: Files
 *   description: File upload and retrieval endpoints
 */

/**
 * @swagger
 * /api/files/upload:
 *   post:
 *     summary: Upload a new file
 *     tags: [Files]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - filename
 *               - url
 *             properties:
 *               filename:
 *                 type: string
 *                 description: The name of the file
 *               url:
 *                 type: string
 *                 description: The URL where the file is stored
 *     responses:
 *       201:
 *         description: File uploaded successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 file:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: File ID
 *                     filename:
 *                       type: string
 *                     url:
 *                       type: string
 *                     uploadedBy:
 *                       type: integer
 *                       description: ID of the user who uploaded the file
 *       400:
 *         description: Filename and URL are required
 *       401:
 *         description: Unauthorized - User not authenticated
 *       500:
 *         description: Error uploading file
 */

/**
 * @swagger
 * /api/files/{id}:
 *   get:
 *     summary: Get a file by ID
 *     tags: [Files]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The file ID
 *     responses:
 *       200:
 *         description: File details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 filename:
 *                   type: string
 *                 url:
 *                   type: string
 *                 uploadedBy:
 *                   type: integer
 *       400:
 *         description: Invalid file ID
 *       404:
 *         description: File not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */
