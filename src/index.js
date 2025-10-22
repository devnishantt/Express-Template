import express from "express";
import { PORT } from "./config/serverConfig.js";
import apiRouter from "./routes/apiRoutes.js";

const app = express();

app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
