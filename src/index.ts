import "dotenv/config";
import express, { Request, Response } from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
	res.json({
		message: "Welcome to the Test API",
	});
});

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});
