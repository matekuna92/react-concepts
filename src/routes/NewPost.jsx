import {Link} from "react-router-dom";
import Modal from "../components/Modal";
import classes from "./NewPost.module.css";
import { useState } from "react";

const NewPost = ({ onFormSubmit, onCancel }) => {
    const [enteredDesc, setEnteredDesc] = useState("");
    const [enteredAuthor, setEnteredAuthor] = useState("");

    const changeDescHandler = (event) => {
        setEnteredDesc(event.target.value);
    };

    const changeAuthorHandler = (event) => {
        setEnteredAuthor(event.target.value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();

        const formData = {
            desc: enteredDesc,
            author: enteredAuthor
        }

        onFormSubmit(formData);
        onCancel();
    }

    return (
        <Modal>
            <form className={classes.form} onSubmit={formSubmitHandler}>
                <p>
                    <label htmlFor="body">Desc</label>
                    <textarea
                        id="body"
                        required
                        rows={3}
                        onChange={changeDescHandler}
                    />
                </p>
                <p>
                    <label htmlFor="author">Author</label>
                    <input
                        type="text"
                        id="author"
                        required
                        onChange={changeAuthorHandler}
                    />
                </p>
                <p className={classes.actions}>
                    <button type="submit">Submit</button>
                    <Link to=".." type="button">
                        Cancel
                    </Link>
                </p>
            </form>
        </Modal>
    );
}

export default NewPost;