const express = require("express");
const UserController = require("./controllers/UserController");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/register", UserController.register);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});