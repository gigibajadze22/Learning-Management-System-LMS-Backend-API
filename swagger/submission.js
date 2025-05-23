/**
 * @swagger
 * tags:
 *   name: Submission
 *   description: Assignment submission endpoints
 */

/**
 * @swagger
 * /api/assigments/{id}/submit:
 *   post:
 *     summary: Submit an assignment by assignment ID
 *     tags: [Submission]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Assignment ID to submit
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - file
 *               - submittedAt
 *             properties:
 *               file:
 *                 type: string
 *                 example: https://example.com/submissions/file1.pdf
 *               grade:
 *                 type: number
 *                 example: 95
 *               submittedAt:
 *                 type: string
 *                 format: date-time
 *                 example: 2025-05-23T14:30:00Z
 *     responses:
 *       201:
 *         description: Submission created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 file:
 *                   type: string
 *                   example: https://example.com/submissions/file1.pdf
 *                 grade:
 *                   type: number
 *                   example: 95
 *                 submittedAt:
 *                   type: string
 *                   example: 2025-05-23T14:30:00Z
 *                 assignmentId:
 *                   type: string
 *                   example: "1"
 *                 studentId:
 *                   type: string
 *                   example: "42"
 *       400:
 *         description: Bad request, missing or invalid parameters
 *       401:
 *         description: Unauthorized, user not authenticated or not student
 *       500:
 *         description: Server error while creating submission
 */

/**
 * @swagger
 * /api/assigments/{id}/submission:
 *   get:
 *     summary: Get all submissions for an assignment by assignment ID
 *     tags: [Submission]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Assignment ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: List of submissions for the assignment
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
 *                   file:
 *                     type: string
 *                     example: https://example.com/submissions/file1.pdf
 *                   grade:
 *                     type: number
 *                     example: 95
 *                   submittedAt:
 *                     type: string
 *                     example: 2025-05-23T14:30:00Z
 *                   assignmentId:
 *                     type: string
 *                     example: "1"
 *                   studentId:
 *                     type: string
 *                     example: "42"
 *       401:
 *         description: Unauthorized, user not authenticated or not instructor/admin
 *       404:
 *         description: No submissions found for the assignment
 *       500:
 *         description: Server error while fetching submissions
 */
