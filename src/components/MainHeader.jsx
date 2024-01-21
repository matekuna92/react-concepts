import { MdPostAdd, MdMessage, MdLogin } from "react-icons/md";
import classes from "./MainHeader.module.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const MainHeader = ({ onAddPost }) => {
    const authContext = useContext(AuthContext);
    let { isLoggedIn } = authContext;

    const handleLogin = () => {
        console.log("authContext:", authContext);
    };

    return (
        <>
            <header className={classes.header}>
                <h1 className={classes.logo}>
                    <MdMessage /> React MainHeader
                </h1>
                {isLoggedIn && (
                    <Link to="/create-post" className={classes.button}>
                        <MdPostAdd size={15} /> New Post
                    </Link>
                )}
                <Link to="/login" className={classes.button}>
                    <MdLogin size={15} onClick={handleLogin} /> Login/Register
                </Link>
            </header>
        </>
    );
};

export default MainHeader;
