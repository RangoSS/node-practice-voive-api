import express from 'express';
import { verifyToken } from '../middleware/authMiddleware.js'; 
import { checkRole } from '../middleware/roleMiddleware.js'; 
// routers/userRoutes.js
import { postUser,getAllUsers } from '../controller/employeeUser'; // Importing from your controller
import { Login } from '../controller/contLogin.js'; // Importing from your controller


const router = express.Router();

// POST endpoint to add an employee
//router.post('/user',verifyToken, checkRole(['admin']),postUser);
router.post('/user',postUser);
router.get('/user', getAllUsers);
router.post('/login', Login);



// GET endpoint to retrieve all employees
//router.get('/user-info', getUser);



export default router; 