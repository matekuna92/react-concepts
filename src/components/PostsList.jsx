import {useEffect, useState} from "react";
import Post from "./Post";
import classes from "./PostsList.module.css";

const PostsList = ({ onCancel }) => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        async function fetchPosts() {
            setIsLoading(true);
            const response = await fetch("http://localhost:8080/posts");
            const responseData = await response.json();
            setPosts(responseData.posts); // backend returns a response called "posts": res.json({ posts: storedPosts });
            setIsLoading(false);
        }

        fetchPosts();
    }, []);

    const addPostHandler = (postData) => {
        fetch("http://localhost:8080/posts", {
            method: "POST",
            body: JSON.stringify(postData),
            headers: {
                "Content-Type": "application/json",
            },
        });

        setPosts((prevState) => [...prevState, postData]);
    }

    return (
        <>
            {!isLoading && posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((post) => (
                        <Post
                            key={post.id}
                            author={post.author}
                            desc={post.desc}
                        />
                    ))}
                </ul>
            )}

            {!isLoading && posts.length == 0 && (
                <p>There are no posts yet. Add the first one!</p>
            )}

            {isLoading && <p>Loading posts...</p>}
        </>
    );
}

export default PostsList;
