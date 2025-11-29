import { Post } from "../models/post.model.js";

// Create a post
const createPost = async (req, res) => {
  try {
    const { name, description, age } = req.body;
    if (!name || !description || !age) {
      return res.status(400).json({ message: "All Fields are required" });
    }
    const post = await Post.create({ name, description, age });
    res.status(201).json({ message: "Post created successfully", post });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

// Read all posts
const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
  }
};

const updatePosts = async (req, res) => {
  try {
    // this is the basic validation for to check if the body is empty
    if (Object.keys(req.body).length == 0) {
      return res.status(400).json({
        message: "No Data Provided for update",
      });
    }
    const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!post) {
      return res.status(404).json({ message: "Post not found " });
    }
    res.status(200).json({ message: "Post Update Successfully", post });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
      error,
    });
  }
};

const deletePost = async (req, res) => {
  try {
    const deleted = await Post.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Post not found" });
    res.status(200).json({ message: "Post successfully deleted." });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
};

export { createPost, getPosts, updatePosts, deletePost };
