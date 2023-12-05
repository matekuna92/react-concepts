import PostsList from "../components/PostsList";
import {Outlet} from "react-router-dom";

const Posts = () => {
    return (
        <>
            <Outlet />
            <main>
                <PostsList />
            </main>
        </>
    );
};

export default Posts;
