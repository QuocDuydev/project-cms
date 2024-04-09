import { Button, Input, Typography } from '@material-tailwind/react'
import { Link } from 'react-router-dom';
import {useContext} from 'react'
import AuthContext from '../context/AuthContext';

export default function SignIn() {
    const { loginUser } = useContext(AuthContext);
    return (
        <form onSubmit={loginUser}>
            <section className="container mx-auto py-24 ">
                <div className="lg:w-1/2 md:w-2/3 bg-gray-100 rounded-lg p-8 flex flex-col w-full  mx-auto ">
                    <div>
                        <Typography variant='h3' className="text-gray-900 mb-5 text-center">Sign In</Typography>
                    </div>
                    <div className="relative mb-4">
                        <label className="leading-7 text-sm text-gray-600">Email</label>
                        <Input type="email"
                            name="email"
                            placeholder='Enter email ...'
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 py-1 px-3 leading-8" />
                    </div>
                    <div className="relative mb-4">
                        <label className="leading-7 text-sm text-gray-600">Password</label>
                        <Input type="password"
                            name="password"
                            placeholder='Enter password ...'
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 py-1 px-3 leading-8" />
                    </div>
                    <Button type="submit" className='text-lg hover:bg-gray-800'>Sign In</Button>
                    <div className="flex mt-4 ">
                        <a href="" className="text-sm text-left font-semibold mx-auto text-blue-500">Forgot Password?</a>
                        <p className="text-sm mx-auto text-right font-semibold"> No account yet? <Link to={'/signup'} className="text-sm text-right font-semibold text-red-500"> Sign Up</Link> now!</p>
                    </div>
                </div>

            </section>
        </form>
    );
}
