import {InitTodo, Todo} from "./todo";

export type User = {
    id: number | null;
    first_name: string;
    last_name: string;
    age: number;
    email: string;
    password: string;
    created_at: string;
    updated_at: string;
    todos: Todo[]
};

export const InitUser: User = {
    id: null,
    first_name: "",
    last_name: "",
    age: 0,
    email: "",
    password: "",
    created_at: "",
    updated_at: "",
    todos: [InitTodo],
}
