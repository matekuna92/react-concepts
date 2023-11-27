import { useState } from "react";

import MainHeader from "./components/MainHeader";
import PostsList from "./components/PostsList";

const App = () => {
	const [isModalVisible, setIsModalVisible] = useState(false);

	const hideModalHandler = () => {
		setIsModalVisible(false);
	};

	const showModalHandler = () => {
		setIsModalVisible(true);
	};

	return (
		<>
			<MainHeader onAddPost={showModalHandler} />
			<PostsList
				isPosting={isModalVisible}
				onShowPosts={hideModalHandler}
				onCancel={hideModalHandler}
			/>
		</>
	);
}

export default App;