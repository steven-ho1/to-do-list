export interface TodoListSummary {
    id: string;
    title: string;
}

export interface TodoList extends TodoListSummary {
    todos: Todo[];
}

export interface Todo {
    task: string;
    completed: boolean;
    due?: Date;
}
