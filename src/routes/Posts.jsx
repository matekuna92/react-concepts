import { useState } from "react";

import PostsList from "../components/PostsList";
import { Outlet } from "react-router-dom";

const Posts = () => {
    /* const [isModalVisible, setIsModalVisible] = useState(false);

    const hideModalHandler = () => {
        setIsModalVisible(false);
    };

    const showModalHandler = () => {
        setIsModalVisible(true);
    }; */

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
