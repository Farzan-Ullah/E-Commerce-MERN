"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const user_1 = require("./routes/user");
const product_1 = require("./routes/product");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/auth", user_1.userRouter);
app.use("/products", product_1.productRouter);
// const mongoUri: string = process.env.MONGODB_URI as string;
// const connectToDatabase = async (): Promise<void> => {
//   try {
//     await mongoose.connect(mongoUri, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("Connected to MongoDB");
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//   }
// };
// connectToDatabase();
mongoose_1.default
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("DB Connected!"))
    .catch((error) => console.log("DB Failed to Connect", error));
app.listen(3001, () => console.log("Server started"));
