import classes from "./Modal.module.css";

const Modal = ( { children, onHideBackdrop }) => {
	return (
		<>
			<div className={classes.backdrop} onClick={onHideBackdrop} />
			<dialog open className={classes.modal}>
				{children}
			</dialog>
		</>
	);
}

export default Modal;