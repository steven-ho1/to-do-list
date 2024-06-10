export interface TodoList {
    id: string;
    title: string;
    todos?: Todo[];
}

export interface Todo {
    task: string;
    completed: boolean;
    due?: Date;
}
