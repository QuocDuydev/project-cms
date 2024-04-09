import { Button, Input, Typography } from '@material-tailwind/react'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react'
import axios from 'axios';
import {
    UserIcon,
    ChatBubbleLeftRightIcon,
    LockClosedIcon
} from "@heroicons/react/24/solid";
export default function SignUp() {
    const [users, setUsers] = useState({
        username: "",
        email: "",
        password: "",
        repassword: ""
    });
    const navigate = useNavigate();
    const [passwordsMatch, setPasswordsMatch] = useState(true);

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setUsers({ ...users, [name]: value });
    };
    const handleSingup = async () => {
        if (users.password === users.repassword) {
            try {
                const response = await axios.post(
                    `http://localhost:1337/api/auth/local/register`,
                    {
                        username: users.username,
                        email: users.email,
                        password: users.password,
                    }
                );
                if (response.status === 200) {
                    alert("Register Successfully!");
                    setUsers({
                        username: "",
                        email: "",
                        password: "",
                        repassword: "",
                    });
                    navigate("/signin");

                } else {
                    alert("Sign up failed!");
                }
            } catch (error) {
                console.error("Sign up failed:", error);
            }
        } else {
            setPasswordsMatch(false);
        }
    }


    return (

        <section className="container mx-auto py-24 ">

            <div className="lg:w-1/2 md:w-2/3 bg-gray-100 rounded-lg p-8 flex flex-col w-full  mx-auto ">
                <div>
                    <Typography variant='h3' className="text-gray-900 mb-5 text-center">Sign Up</Typography>
                </div>
                <div className="relative mb-4">
                    <label className="leading-7 text-sm text-gray-600">Username</label>
                    <div className="flex">
                        <Button size='sm' className=' rounded-none rounded-s-lg'>
                            <UserIcon className='w-5 h-5' />
                        </Button>
                        <Input type="text"
                            name="username"
                            value={users.username}
                            onChange={handleChange}
                            placeholder='Enter username ...'
                            className="w-full bg-white rounded-none rounded-e-lg border py-1 px-3 leading-8" />
                    </div>

                </div>
                <div className="relative mb-4">
                    <label className="leading-7 text-sm text-gray-600">Email</label>
                    <div className="flex">
                        <Button size='sm' className=' rounded-none rounded-s-lg'>
                            <ChatBubbleLeftRightIcon className='w-5 h-5' />
                        </Button>
                        <Input type="email"
                            name="email"
                            value={users.email}
                            onChange={handleChange}
                            placeholder='Enter email ...'
                            className="w-full bg-white rounded-none rounded-e-lg border py-1 px-3 leading-8" />
                    </div>
                </div>
                <div className="relative mb-4">
                    <label className="leading-7 text-sm text-gray-600">Password</label>
                    <div className="flex">
                        <Button size='sm' className=' rounded-none rounded-s-lg'>
                            <LockClosedIcon className='w-5 h-5' />
                        </Button>
                        <Input type="password"
                            name="password"
                            value={users.password}
                            onChange={handleChange}
                            placeholder='Enter password ...'
                            className="w-full bg-white rounded-none rounded-e-lg border py-1 px-3 leading-8" />
                    </div>
                </div>
                <div className="relative mb-4">
                    <label className="leading-7 text-sm text-gray-600">Repassword</label>
                    <div className="flex">
                        <Button size='sm' className=' rounded-none rounded-s-lg'>
                            <LockClosedIcon className='w-5 h-5' />
                        </Button>
                        <Input type="password"
                            name="repassword"
                            value={users.repassword}
                            onChange={handleChange}
                            placeholder='Enter repassword ...'
                            className="w-full bg-white rounded-none rounded-e-lg border py-1 px-3 leading-8" />
                    </div>
                </div>
                {!passwordsMatch && <p className="text-red-500 mb-3">Passwords do not match</p>}
                <Button onClick={handleSingup} className='text-lg hover:bg-gray-800'>Sign Up</Button>
                <div className="flex mt-4 ">
                    <p className="text-sm mx-auto text-right font-semibold"> No account yet? <Link to={'/signin'} className="text-sm text-right font-semibold text-red-500"> Sign In</Link> now!</p>
                </div>

            </div>

        </section>
    );
}
