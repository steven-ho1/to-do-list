import { devEnvironment } from "../environments/development";

export const fetchTodoLists = async (id: string = "") => {
    const response: Response = await fetch(
        `${devEnvironment.serverUrl}/lists/${id}`
    );
    return response.json();
};
