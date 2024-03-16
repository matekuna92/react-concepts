import { Form, redirect } from "react-router-dom";
import classes from "./NewPost.module.css";
import Modal from "../components/Modal.jsx";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";

const LoginForm = () => {

    const authContext = useContext(AuthContext);
    const dispatch = authContext.dispatch;
    // short form: const { dispatch } = useContext(AuthContext);

    const handleLogin = async (event) => {
        event.preventDefault();

        const username = event.target.username.value;
        const password = event.target.password.value;

        try {
            dispatch({ type: 'LOGIN', payload: { username, password } });
        } catch (error) {
            console.error("Error occurred while logging in:", error);
        }
    }

    return (
        <Modal>
            <Form method="post" className={classes.form} onSubmit={handleLogin}>
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

export const action = async (data) => {
    try {
        const userData = await data.request.formData();
        console.log('userData: ', Object.fromEntries(userData));

        const response = await fetch("http://localhost:8080/users", {
            method: "POST",
            body: JSON.stringify(userData),
            headers: {
                "Content-Type": "http://localhost:5173"
            }
        });

        console.log("response: ", response);

        if (response.ok) {
            return redirect("/");
        } else {
            return {
                error: "Failed to login"
            }
        }
    } catch (error) {
        console.log('error: ', error);
        return {
            error: "An unexpected error occurred."
        };
    }
}