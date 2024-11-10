const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose
  .connect(
    "mongodb+srv://aruzhizn:vprxroNp1lZztiw4@cluster0.mlldb.mongodb.net/"
  )
  .then(() => console.log("connected mongo db"))
  .catch((e) => console.log(e));
