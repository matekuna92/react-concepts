import { MdMessage, MdPostAdd } from 'react-icons/md';
import classes from "./MainHeader.module.css";
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";

const MainHeader = ({ onAddPost }) => {
    const authContext = useContext(AuthContext);
    const { isLoggedIn } = authContext;

    return (
        <>
            <header className={classes.header}>
                <h1 className={classes.logo}>
                    <MdMessage/> React MainHeader
                </h1>
                {isLoggedIn && <Link
                    to="/create-post"
                    className={classes.button}
                    onClick={onAddPost}
                >
                    <MdPostAdd size={15}/> New Post
                </Link>}
                {!isLoggedIn && <Link to={"/login"} className={classes.button}> Login </Link>}
            </header>
        </>
    );
}

export default MainHeader;