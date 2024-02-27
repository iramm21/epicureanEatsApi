const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const recipeRoutes = require("./api/routes/recipeRoutes");
const loggerMiddleware = require("./api/middleware/logger");

require("dotenv").config();
connectDB();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(loggerMiddleware);

app.use('/api/recipes', recipeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
