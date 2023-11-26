import classes from "./Post.module.css";

const Post = ({ author, desc }) => {
    return <div className={classes.post}>
        <p className={classes.author}>{author}</p>
        <p className={classes.desc}>{desc}</p>
    </div>
}

export default Post;