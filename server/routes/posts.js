import express from 'express';

import { getPosts, createPosts ,updatePost,deletePost, likePost} from '../controllers/posts.js';
import Auth from '../middleware/auth.js';


const router = express.Router();

router.get('/', getPosts);
router.post('/', Auth, createPosts);
router.patch('/:id',Auth,updatePost);
router.delete('/:id',Auth, deletePost);
router.patch('/:id/likePost',Auth, likePost);

export default router;