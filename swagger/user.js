/**
 * @swagger
 * tags:
 *   name: User
 *   description: User profile and management endpoints
 */

/**
 * @swagger
 * /api/users/me:
 *   get:
 *     summary: Get logged-in user's profile
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User profile retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 email:
 *                   type: string
 *                   example: user@example.com
 *                 name:
 *                   type: string
 *                   example: John Doe
 *                 avatar:
 *                   type: string
 *                   example: /uploads/avatar123.jpg
 *       401:
 *         description: Unauthorized - user not authenticated
 *       404:
 *         description: User not found
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get all users (admin only)
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of all users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   email:
 *                     type: string
 *                     example: user@example.com
 *                   name:
 *                     type: string
 *                     example: John Doe
 *                   avatar:
 *                     type: string
 *                     example: /uploads/avatar123.jpg
 *       401:
 *         description: Unauthorized - user not authenticated
 *       403:
 *         description: Forbidden - user not admin
 *       500:
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/users/uploadImage:
 *   post:
 *     summary: Upload profile picture for logged-in user
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               profileImage:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Profile picture uploaded successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 email:
 *                   type: string
 *                   example: user@example.com
 *                 name:
 *                   type: string
 *                   example: John Doe
 *                 avatar:
 *                   type: string
 *                   example: /uploads/avatar123.jpg
 *       400:
 *         description: No file uploaded
 *       401:
 *         description: Unauthorized - user not authenticated
 *       500:
 *         description: Internal server error
 */
