import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import {InitTodo, Todo} from "../../types/todo";
import axios from "axios";

const TodoDetail = () => {
    const params = useParams();
    const [todo, setTodo] = useState<Todo>(InitTodo);
    const getTodo = () => {
        axios.get(`http://localhost:8084/todos/${params.id}`).then(res => {
            setTodo(res.data.data);
        }).catch(err => {
            console.log(err);
        })
    }
    return (
        <div className="h-screen">
            <div className="px-10 mt-10">
                <div className="bg-white rounded-md max-w-4xl mx-auto p-4 space-y-4 shadow-lg">
                    <h3 className="mb-2 font-semibold">Title: <span className="font-thin">Create Todo App</span></h3>
                    <div className="pt-2">
                        <h3 className="font-semibold">Description:</h3>
                        <p className="font-thin mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                            vitae,
                            aliquid deserunt beatae nam est?</p>
                    </div>
                    <h3 className="border-t mb-2 pt-3 font-semibold">Name: <span
                        className="font-thin">Joker Banny</span></h3>
                    <h3 className="border-t mb-2 pt-3 font-semibold">Email:
                        <span className="font-thin">jokerbanny@gmail.com</span></h3>
                    <div className="flex justify-end space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 cursor-pointer"
                             fill="none"
                             viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600 cursor-pointer"
                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 cursor-pointer"
                             fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoDetail;
