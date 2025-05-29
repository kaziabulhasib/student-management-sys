const express = require("express");
const app = express();
const studentRoutes = require("./routes/studentRoutes");
app.use(express.json());
// app.use("/api/students", studentRoutes);
//  // ?? router.post('/', ...) ---->/api/students(full url)

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("student mamangement server is running ");
});

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
