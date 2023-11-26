import classes from "./NewPost.module.css";

const NewPost = ( { onDescChange, onAuthorChange }) => {

   return (
       <form className={classes.form}>
           <p>
               <label htmlFor="body">Desc</label>
               <textarea id="body" required rows={3} onChange={onDescChange} />
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
       </form>
   );
}

export default NewPost;