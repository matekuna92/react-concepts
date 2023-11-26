import classes from "./Post.module.css";

const Post = ({ author, desc }) => {
    return (
        <li className={classes.post}>
            <p className={classes.author}>{author}</p>
            <p className={classes.desc}>{desc}</p>
        </li>
    );
}

export default Post;