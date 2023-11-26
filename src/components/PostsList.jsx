import Post from "./Post";
import classes from "./PostsList.module.css";

const PostsList = () => {
    return (
        <ul className={classes.posts}>
            <Post author="Mate" desc="Post 1" />
            <Post author="Mate" desc="Post 2" />
        </ul>
    );
};

export default PostsList;
