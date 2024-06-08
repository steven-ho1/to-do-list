import express, { Express, Request, Response } from "express";
import http from "http";

const app: Express = express();

app.use(express.json());

// test
app.get("/", (req: Request, res: Response) => {});

http.createServer(app).listen(3000);
console.log("Démarré");
