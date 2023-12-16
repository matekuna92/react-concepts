import Post from "./Post";
import classes from "./PostsList.module.css";
import { useLoaderData } from "react-router-dom";

const PostsList = () => {
    const posts = useLoaderData();
   
    return (
        <>
            {posts.length > 0 && (
                <ul className={classes.posts}>
                    {posts.map((post) => (
                        <Post
                            key={post.id}
                            id={post.id}
                            author={post.author}
                            desc={post.desc}
                        />
                    ))}
                </ul>
            )}

            {posts.length === 0 && (
                <p>There are no posts yet. Add the first one!</p>
            )}
        </>
    );
}

export default PostsList;
