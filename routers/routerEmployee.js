import express from 'express';
// routers/userRoutes.js
import { postUser } from '../controller/employeeUser'; // Importing from your controller


const router = express.Router();

// POST endpoint to add an employee
router.post('/user', postUser);





// GET endpoint to retrieve all employees
//router.get('/user-info', getUser);



export default router; 