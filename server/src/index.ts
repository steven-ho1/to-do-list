import cors from "cors";
import express, { Express, Request, Response } from "express";
import http from "http";
import { StatusCodes } from "http-status-codes";
import { TodoList, TodoListSummary } from "../../common/interfaces";

const app: Express = express();
const port: number = 4000;
const lists: TodoList[] = [
    { id: "1", title: "first", todos: [{ task: "task 1", completed: true }] },
    { id: "2", title: "second", todos: [] },
];

app.use(cors());
app.use(express.json());

app.get("/lists", (_req: Request, res: Response) => {
    const todoLists: TodoListSummary[] = lists.map((todoList) => ({
        id: todoList.id,
        title: todoList.title,
    }));
    res.json(todoLists);
});

app.get("/lists/:id", (req: Request, res: Response) => {
    const todoList = lists.find((list) => list.id === req.params.id);

    if (todoList) res.json(todoList);
    else res.status(StatusCodes.NOT_FOUND).json({ eror: "List not found" });
});

http.createServer(app).listen(port);
console.log(`Server is running on port ${port}`);
