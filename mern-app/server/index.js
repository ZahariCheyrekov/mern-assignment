import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Application is running correctly.");
});

app.listen(PORT, () => console.log(`Server is listening on port: ${PORT}`));
