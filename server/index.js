import express from "express";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Example API route
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Node.js backend 🚀" });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
