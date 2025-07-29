const express = require("express");
const UserController = require("./controllers/UserController");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/v1/auth/register", UserController.register);
app.post("/api/v1/auth/login", UserController.login);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
