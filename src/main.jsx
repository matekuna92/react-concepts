import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { loader as postsLoader } from "./routes/Posts";
import { action as newPostsAction } from "./routes/NewPost";
import PostDetails, { loader as postDetailsLoader } from "./routes/PostDetails";
import { action as loginFormAction } from "./routes/LoginForm";

import Posts from "./routes/Posts";
import "./index.css";
import NewPost from "./routes/NewPost";
import RootLayout from "./routes/RootLayout";
import LoginForm from "./routes/LoginForm.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Posts />,
                loader: postsLoader,
                children: [
                    {
                        path: "/create-post",
                        element: <NewPost />,
                        action: newPostsAction,
                    },
                    { path: "/:id", element: <PostDetails />, loader: postDetailsLoader },
                    { path: "/login", element: <LoginForm />, action: loginFormAction }
                ],
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
