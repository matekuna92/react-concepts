const express = require("express");
const bodyParser = require("body-parser");

import { getStoredPosts, storePosts } from "./data/posts";
import { getRegisteredUsers } from './data/users';

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    // Attach CORS headers
    // Required when using a detached backend (that runs on a different domain)
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,POST");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    next();
});

// posts
app.get("/posts", async (req, res) => {
    const storedPosts = await getStoredPosts();
    await new Promise((resolve, reject) => setTimeout(() => resolve(), 1500));
    res.json({ posts: storedPosts });
});

app.get("/posts/:id", async (req, res) => {
    const storedPosts = await getStoredPosts();
    const post = storedPosts.find((post) => post.id === req.params.id);
    res.json({ post });
});

app.post("/posts", async (req, res) => {
    const existingPosts = await getStoredPosts();
    const postData = req.body;
    const newPost = {
        ...postData,
        id: Math.random().toString(),
    };
    const updatedPosts = [newPost, ...existingPosts];
    await storePosts(updatedPosts);
    res.status(201).json({ message: "Stored new post.", post: newPost });
});

// users
app.get('/users', async (req, req) => {
    const storedUsers = await getRegisteredUsers();
    res.json({ users: storedUsers });
})

app.get('/user/:id', async (req, res) => {
    const storedUsers = await getRegisteredUsers();
    const user = storedUsers.find(user => user.id === req.params.id);
    res.json({ user });
})

app.listen(8081);
