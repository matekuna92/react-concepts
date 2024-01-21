import {useLoaderData} from "react-router-dom";
import Modal from "../components/Modal";
import classes from "./PostDetails.module.css";

const PostDetails = () => {
    const post = useLoaderData();

    return (
        <Modal>
            <main className={classes.details}>
                <h1>Post Details</h1>
                <p className={classes.author}>{post.author}</p>
                <p className={classes.desc}>{post.desc}</p>
            </main>
        </Modal>
    );
};

export default PostDetails;

// loader has a data.params object, just as action has the data.request object
export const loader = async (data) => {
    const id = data.params.id;
    console.log("params id:", id);

    const response = await fetch(`http://localhost:8081/posts/${id}`);
    const responseData = await response.json();

    console.log("responseData: ", responseData);

    return responseData.post; // backend sends back an object with "post" key: "/posts/:id" -> res.json({ post });
};
