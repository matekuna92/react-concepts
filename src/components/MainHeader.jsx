import { MdPostAdd, MdMessage } from 'react-icons/md';
import classes from "./MainHeader.module.css";

const MainHeader = ({ onAddPost }) => {
	return (
		<>
			<header className={classes.header}>
				<h1 className={classes.logo}>
					<MdMessage /> React MainHeader
				</h1>
				<button className={classes.button} onClick={onAddPost}>
					<MdPostAdd size={15} /> New Post
				</button>
			</header>
		</>
	);
}

export default MainHeader;