import { Form, Link, redirect } from "react-router-dom";
import Modal from "../components/Modal";
import classes from "./NewPost.module.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";

const NewPost = () => {
    const authContext = useContext(AuthContext);
    const loggedInUserName = authContext.user?.username;

    return (
        <Modal>
            <Form method="post" className={classes.form}>
                <p>
                    <label htmlFor="body">Desc</label>
                    <textarea id="body" required rows={3} name="desc"/>
                </p>
                <p>
                    <label htmlFor="author">Author</label>
                    <input type="text" id="author" required name="author" value={loggedInUserName || ''}/>
                </p>
                <p className={classes.actions}>
                    <button type="submit">Submit</button>
                    <Link to=".." type="button">
                        Cancel
                    </Link>
                </p>
            </Form>
        </Modal>
    );
};

export default NewPost;

// data is automatically passed by React Router, it is not the data of the form. It is an object, which has a request property
export const action = async (data) => {
    try {
        // Process the form data
        const formData = await data.request.formData();
        const postData = Object.fromEntries(formData);

        // Send the POST request with the form data
        const postResponse = await fetch("http://localhost:8080/posts", {
            method: "POST",
            body: JSON.stringify(postData),
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (postResponse.ok) {
            return redirect("/");
        } else {
            // Handle the case where the POST request fails
            return {
                error: "Failed to create post."
            };
        }
    } catch (error) {
        // Handle any other errors that might occur
        console.error("Error:", error);
        return {
            error: "An unexpected error occurred."
        };
    }
};