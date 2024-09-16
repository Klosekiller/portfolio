import { Router } from 'express';
import { home } from '../controllers/mainController.mjs';

const router = Router();

router.get('/', home); // Serve the index.html file from the new location

export default router;
