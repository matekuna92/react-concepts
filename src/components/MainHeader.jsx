import { MdPostAdd, MdMessage, MdLogin } from "react-icons/md";
import classes from "./MainHeader.module.css";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";

const MainHeader = ({ onAddPost }) => {
    const userContext = useContext(AuthContext);
    let { isLoggedIn } = userContext;
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(isLoggedIn);
    
    const handleLogin = () => {
        console.log("userContext:", userContext);
        console.log("isUserLoggedIn: ", isUserLoggedIn);
        setIsUserLoggedIn(!isUserLoggedIn);
        console.log("userContext after handlelogin:", userContext);
        setIsUserLoggedIn("isUserLoggedIn after: ", isUserLoggedIn);
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
