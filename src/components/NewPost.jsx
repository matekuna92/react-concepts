import classes from "./NewPost.module.css";

const NewPost = ( { onDescChange, onAuthorChange, onCancel }) => {

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
           <p className={classes.actions}>
                <button type="submit">Submit</button>
                <button type="button" onClick={onCancel}>Cancel</button>
           </p>
       </form>
   );
}

export default NewPost;