import { Form, Link, redirect } from "react-router-dom";
import Modal from "../components/Modal";
import classes from "./NewPost.module.css";

const NewPost = () => {
    return (
        <Modal>
            <Form method="post" className={classes.form}>
                <p>
                    <label htmlFor="body">Desc</label>
                    <textarea id="body" required rows={3} name="desc"/>
                </p>
                <p>
                    <label htmlFor="author">Author</label>
                    <input type="text" id="author" required name="author"/>
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

/*
export const action = async (data) => {
    const formData = await data.request.formData();
    // formDate.get('desc') would access the element in form with name="desc"
    const postData = Object.fromEntries(formData);      // { body: '...', author: '...' }
    
    await fetch("http://localhost:8080/posts", {
        method: "POST",
        body: JSON.stringify(postData),
        headers: {
            "Content-Type": "application/json",
        },
    });

    // redirect generates a response object which is returned by this action
    return redirect("/");
}*/
