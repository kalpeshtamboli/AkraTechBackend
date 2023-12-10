require("dotenv").config();

const app = require("./app");

app.listen(process.env.PORT, () => {
  console.log(`server started at PORT : ${process.env.PORT}`);
});
