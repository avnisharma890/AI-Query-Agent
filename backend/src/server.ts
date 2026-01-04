import express from "express";
import cors from "cors";
import { loadEnv } from "./env";
import { askStructured } from "./ask-core";

loadEnv();
const app = express();

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: false,
    methods: ["POST", "GET", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

app.post("/ask", async (req, res) => {
  try {
    const { query } = req.body ?? {};

    if (!query || !String(query).trim()) {
      return res.status(400).json({ error: "Field 'query' is required. " });
    }

    const output = await askStructured(query);

    return res.status(200).json(output);
  } catch (err: any) {
    console.error("ASK ERROR FULL:", err);
    console.error("ASK ERROR MESSAGE:", err?.message);
    console.error("ASK ERROR STACK:", err?.stack);

    return res.status(500).json({
      error: err?.message || "Failed to answer",
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`);
});
