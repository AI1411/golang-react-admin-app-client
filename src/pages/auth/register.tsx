import {LockClosedIcon} from '@heroicons/react/solid'
import {SubmitHandler, useForm} from "react-hook-form";
import {User} from "../../types/user";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Register = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<User>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<User> = data => axios.post("http://localhost:8084/register", data).then(() => {
        navigate("/");
    }).catch(err => {
        console.log(err);
    })
    return (
        <>
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <img
                            className="mx-auto h-12 w-auto"
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                            alt="Workflow"
                        />
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your
                            account</h2>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
                        <input type="hidden" name="remember" defaultValue="true"/>
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    LastName
                                </label>
                                <input
                                    {...register("last_name", {required: true, maxLength: 20})}
                                    id="email-address"
                                    name="last_name"
                                    type="last_name"
                                    autoComplete="last_name"
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Last Name"
                                />
                                {errors.last_name && <p className="text-red-500 ml-2 outline-none py-1 px-2">姓は必須です</p>}
                            </div>
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    First Name
                                </label>
                                <input
                                    {...register("first_name", {required: true, maxLength: 20})}
                                    id="first_name"
                                    name="first_name"
                                    type="text"
                                    autoComplete="first_name"
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="First Name"
                                />
                                {errors.first_name && <p className="text-red-500 ml-2 outline-none py-1 px-2">名は必須です</p>}
                            </div>
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Age
                                </label>
                                <input
                                    {...register("age", {required: true})}
                                    id="age"
                                    name="age"
                                    type="text"
                                    autoComplete="age"
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Age"
                                />
                                {errors.age && <p className="text-red-500 ml-2 outline-none py-1 px-2">年齢は必須です</p>}
                            </div>
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    {...register("email", {required: true, maxLength: 20})}
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Email address"
                                />
                                {errors.email && <p className="text-red-500 ml-2 outline-none py-1 px-2">メールアドレスは必須です</p>}
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    {...register("password", {required: true})}
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                />
                                {errors.password && <p className="text-red-500 ml-2 outline-none py-1 px-2">パスワードは必須です</p>}
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password Confirmation
                                </label>
                                <input
                                    {...register("password_confirmation", {required: true})}
                                    id="password_confirmation"
                                    name="password_confirmation"
                                    type="password"
                                    autoComplete="current-password"
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Password Confirmation"
                                />
                                {errors.password_confirmation && <p className="text-red-500 ml-2 outline-none py-1 px-2">パスワード確認は必須です</p>}
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    {...register("password_confirmation", {required: true})}
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true"/>
                </span>
                                Sign up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
};

export default Register;
