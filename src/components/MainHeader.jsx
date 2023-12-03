import { MdPostAdd, MdMessage } from 'react-icons/md';
import classes from "./MainHeader.module.css";
import { Link } from 'react-router-dom';

const MainHeader = ({ onAddPost }) => {
	return (
        <>
            <header className={classes.header}>
                <h1 className={classes.logo}>
                    <MdMessage /> React MainHeader
                </h1>
                <Link
                    to="/create-post"
                    className={classes.button}
                    onClick={onAddPost}
                >
                    <MdPostAdd size={15} /> New Post
                </Link>
            </header>
        </>
    );
}

export default MainHeader;