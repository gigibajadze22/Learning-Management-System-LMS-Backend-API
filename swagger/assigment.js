/**
 * @swagger
 * tags:
 *   name: Assignments
 *   description: Assignment management within courses
 */

/**
 * @swagger
 * /api/courses/{id}/assigments:
 *   post:
 *     summary: Create an assignment for a specific course
 *     tags: [Assignments]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the course
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *               - dueDate
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               dueDate:
 *                 type: string
 *                 format: date
 *     responses:
 *       201:
 *         description: Assignment created successfully
 *       400:
 *         description: Bad request
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       500:
 *         description: Server error
 *
 *   get:
 *     summary: Get all assignments for a specific course
 *     tags: [Assignments]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the course
 *     responses:
 *       200:
 *         description: List of assignments
 *       404:
 *         description: Course not found
 *       500:
 *         description: Server error
 */
