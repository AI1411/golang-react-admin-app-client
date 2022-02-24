export type Todo = {
    id: number;
    title: string;
    body: string;
    status: string;
    user_id: number;
};

export const InitTodo: Todo = {
    id: 0,
    title: "",
    body: "",
    status: "",
    user_id: 0
}
