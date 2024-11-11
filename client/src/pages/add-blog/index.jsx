import classes from "./styles.module.css";

export default function AddNewBlog() {
  return (
    <div className={classes.wrapper}>
      <h1>Add A Blog</h1>
      <div className={classes.formWrapper}>
        <input
          type="text"
          name="title"
          placeholder="Enter Blog Title"
          id="title"
        />
        <textarea
          name="description"
          placeholder="Enter Blog Description"
          id="description"
        />
        <button>Add New Blog</button>
      </div>
    </div>
  );
}
