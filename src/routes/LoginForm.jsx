import { Form } from "react-router-dom";
import classes from "./NewPost.module.css";
import Modal from "../components/Modal.jsx";

const LoginForm = () => {
    return (
        <Modal>
            <Form method="post" className={classes.form}>
                <p>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" required/>
                </p>
                <p>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" required/>
                </p>
                <p className={classes.actions}>
                    <button type="submit">Login/Register</button>
                </p>

            </Form>
        </Modal>
    );
}

export default LoginForm;