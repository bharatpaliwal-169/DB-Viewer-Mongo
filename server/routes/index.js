import express from 'express';
import {fetchTables,fetchTableContent} from '../controller/index.js'
const router = express.Router();

router.get('/alltables',fetchTables);
router.get('/table',fetchTableContent);


export default router;