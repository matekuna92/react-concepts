import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import Modal from "./Modal";

const PostsList = ({ isPosting, onShowPosts }) => {
    const [enteredDesc, setEnteredDesc] = useState("");
    const [enteredAuthor, setEnteredAuthor] = useState("");

    const changeDescHandler = (event) => {
        setEnteredDesc(event.target.value);
    };

    const changeAuthorHandler = (event) => {
        setEnteredAuthor(event.target.value);
    };

    return (
		<>
			{isPosting && (
				<Modal onHideBackdrop={onShowPosts}>
					<NewPost
						onDescChange={changeDescHandler}
						onAuthorChange={changeAuthorHandler}
					/>
				</Modal>
			)}

			<ul className={classes.posts}>
				<Post author={enteredAuthor} desc={enteredDesc} />
				<Post author="Mate" desc="Post 2" />
			</ul>
		</>
	);
};

export default PostsList;
