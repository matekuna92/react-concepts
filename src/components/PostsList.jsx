import { useEffect, useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import Modal from "./Modal";

const PostsList = ({ isPosting, onShowPosts, onCancel, onAddNewPost }) => {
    const [enteredDesc, setEnteredDesc] = useState("");
    const [enteredAuthor, setEnteredAuthor] = useState("");
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const changeDescHandler = (event) => {
        setEnteredDesc(event.target.value);
    };

    const changeAuthorHandler = (event) => {
        setEnteredAuthor(event.target.value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();
        
        const formData = {
            id: posts.length + 1,
            desc: enteredDesc,
            author: enteredAuthor
        }

	   fetch("http://localhost:8080/posts", {
           method: "POST",
           body: JSON.stringify(formData),
           headers: {
               "Content-Type": "application/json",
           },
       });

	   // setPosts([...posts, formData]); // directly manipulating state is a bad practise
       setPosts((prevState) => [...prevState, formData]);
       onCancel();

        console.log('form data: ', formData);
    }

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

    return (
        <>
            {isPosting && (
                <Modal onHideBackdrop={onShowPosts}>
                    <NewPost
                        onDescChange={changeDescHandler}
                        onAuthorChange={changeAuthorHandler}
                        onCancel={onShowPosts}
                        onFormSubmit={formSubmitHandler}
                    />
                </Modal>
            )}

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
};

export default PostsList;
