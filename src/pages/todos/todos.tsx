import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Todo} from "../../types/todo";
import {Link} from "react-router-dom";
import {STATUS_COLOR} from "../../const";

const statusColor = STATUS_COLOR;

const Todos: React.FC = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    useEffect(() => {
        getTodos();
    }, []);
    const getTodos = () => {
        axios.get("http://localhost:8084/todos").then(res => {
            setTodos(res.data.data)
        }).catch(err => {
            console.log(err);
        })
    };
    const getStatusColor = (statusName: string) => {
        const name = statusColor.find(status => status.status === statusName);
        if (name) {
            return name.color;
        }
    }
    return (
        <div className="flex flex-col mx-10 my-10">
            <div className="mb-3">
                <Link to="/todos/register"
                      className="p-2 pl-5 pr-5 bg-transparent border-2 border-gray-500 text-gray-500 text-lg rounded-lg hover:bg-gray-500 hover:text-gray-100 focus:border-4 focus:border-gray-300">タスクを追加する
                </Link>
            </div>
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    title
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    body
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    status
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                >
                                    user
                                </th>
                                <th scope="col" className="relative px-6 py-3">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                            {todos.map((todo: Todo) => (
                                <tr key={todo.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="ml-4">
                                                <div
                                                    className="text-sm font-medium text-gray-900">{todo.title}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-900">{todo.body}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-${getStatusColor(todo.status)}-100`}>
                        {todo.status}
                      </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{todo.user_id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                        <Link to={`/todos/${todo.id}`}
                                              className="text-indigo-600 hover:text-indigo-900">
                                            Edit
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Todos;
