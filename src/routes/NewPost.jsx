import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import classes from "./NewPost.module.css";

const NewPost = ( { onDescChange, onAuthorChange, onFormSubmit }) => {

   return (
       <Modal>
           <form className={classes.form} onSubmit={onFormSubmit}>
               <p>
                   <label htmlFor="body">Desc</label>
                   <textarea
                       id="body"
                       required
                       rows={3}
                       onChange={onDescChange}
                   />
               </p>
               <p>
                   <label htmlFor="author">Author</label>
                   <input
                       type="text"
                       id="author"
                       required
                       onChange={onAuthorChange}
                   />
               </p>
               <p className={classes.actions}>
                   <button type="submit">Submit</button>
                   <Link to=".." type="button">
                       Cancel
                   </Link>
               </p>
           </form>
       </Modal>
   );
}

export default NewPost;