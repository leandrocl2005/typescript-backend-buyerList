import express from 'express';
import ItemController from './ItemController';

const router = express.Router();

router.get('/', ItemController.get)
router.post('/', ItemController.post)
router.put('/:id', ItemController.put)
router.delete('/:id', ItemController.delete)
router.use('/api/v1/items', router)

export default router;

