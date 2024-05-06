import express from "express";
import { protectedRoute } from "../middlewares/protectedRoute.js";
import {
  commentPost,
  createPost,
  deletePost,
  getAllPost,
  getFollowingPost,
  getLikedPost,
  getUserPosts,
  likeUnlikePost,
} from "../controllers/post.controllers.js";

const router = express.Router();

router.get('/all',protectedRoute,getAllPost)
router.get('/following',protectedRoute,getFollowingPost)
router.get('/likes/:id',protectedRoute,getLikedPost)
router.get("/user/:username", protectedRoute, getUserPosts)
router.post("/create", protectedRoute, createPost);
router.post("/like/:id", protectedRoute, likeUnlikePost);
router.post("/comment/:id", protectedRoute, commentPost);
router.delete("/:id", protectedRoute, deletePost);

export default router;
