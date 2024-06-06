import express from "express";
import { Request, Response } from "express";
import http from "http";

const app = express();

app.use(express.json());

// test
app.get("/", (req: Request, res: Response) => {});

http.createServer(app).listen(3000);
console.log("Démarré");
