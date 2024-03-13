const express = require("express");
const bodyParser = require("body-parser");

const { getStoredPosts, storePosts } = require("./data/posts");
const { getRegisteredUsers, storeUsers } = require("./data/users");

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

    const maxId = existingPosts.reduce((max, post) => Math.max(max, post.id), 0);

    const newPost = {
        ...postData,
        id: (maxId + 1).toString()
    };
    const updatedPosts = [newPost, ...existingPosts];
    await storePosts(updatedPosts);
    res.status(201).json({ message: "Stored new post.", post: newPost });
});

app.post("/users", async (req, res) => {
    const registeredUsers = await getRegisteredUsers();
    const userData = req.body;

    const maxUserId = registeredUsers.reduce((max, user) => Math.max(max, user.id), 0);

    const newUser = {
        ...userData,
        id: (maxUserId + 1).toString()
    };

    const updatedUsers = [newUser, ...registeredUsers];
    await storeUsers(updatedUsers);
    res.status(201).json({ message: "Registered new user.", user: newUser });
})

app.listen(8080);
