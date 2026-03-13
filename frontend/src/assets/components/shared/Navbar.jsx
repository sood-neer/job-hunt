import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Popover from '@radix-ui/react-popover';
import Button from '../ui/button';
import Avatar from '../ui/avatar';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'; // Make sure axios is imported
import { LogOut, User2Icon } from 'lucide-react';
import toast from 'react-hot-toast';
import { USER_API_END_POINT } from '../utils/constant';
import { setUser } from '../redux/authSlice';

const Navbar = () => {
    const { user } = useSelector(store => store.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logoutHandler = async () => {
        try {
            const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
            if (res.data.success) {
                dispatch(setUser(null));
                navigate('/');
                toast.success(res.data.message);
            }
        } catch (error) {
            console.error(error); // Use console.error for better error visibility
            toast.error(error.response?.data?.message || "An error occurred while logging out.");
        }
    };

    return (
        <div className="sticky top-0 z-50 glass border-b border-white/20">
            <div className="flex items-center justify-between mx-auto max-w-7xl h-20 px-4 md:px-6">
                <div>
                    <Link to="/">
                        <h1 className="text-2xl font-display font-bold tracking-tight text-slate-900">
                            Job <span className="text-gradient">Portal</span>
                        </h1>
                    </Link>
                </div>
                <div className='flex items-center gap-8'>
                    <ul className="flex font-semibold items-center gap-6 text-slate-600">
                        {
                            user && user.role === 'Recruiter' ? (
                                <>
                                    <li><Link to="/admin/companies" className="hover:text-brand-600 transition-colors">Companies</Link></li>
                                    <li><Link to="/admin/jobs" className="hover:text-brand-600 transition-colors">Jobs</Link></li>
                                </>
                            ) : (
                                <>
                                    <li><Link to="/" className="hover:text-brand-600 transition-colors">Home</Link></li>
                                    <li><Link to="/jobs" className="hover:text-brand-600 transition-colors">Jobs</Link></li>
                                    <li><Link to="/browse" className="hover:text-brand-600 transition-colors">Browse</Link></li>
                                </>
                            )
                        }

                    </ul>
                    {
                        !user ? (
                            <div className='flex items-center gap-x-4'>
                                <Link to="/login"><Button variant="ghost">Login</Button></Link>
                                <Link to="/signup"><Button variant="default">Signup</Button></Link>
                            </div>
                        ) : (
                            <Popover.Root>
                                <Popover.Trigger asChild>
                                    <div className="cursor-pointer hover:scale-105 transition-transform">
                                        <Avatar
                                            src={user?.profile?.profilePhoto}
                                            alt="User Avatar"
                                            fallback="UA"
                                            size="medium"
                                        />
                                    </div>
                                </Popover.Trigger>
                                <Popover.Content side="bottom" className="w-80 p-5 bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-slate-100 z-50 mt-2">
                                    <div className='flex items-center gap-4 mb-4'>
                                        <Avatar
                                            src={user?.profile?.profilePhoto}
                                            alt="User Avatar"
                                            fallback="UA"
                                            size="medium"
                                        />
                                        <div className='flex flex-col'>
                                            <h4 className="font-bold text-slate-900">{user.fullname}</h4>
                                            <p className='text-sm text-slate-500 line-clamp-1'>{user.profile.bio || "No bio available"}</p>
                                        </div>
                                    </div>
                                    <hr className="border-slate-100 my-4" />
                                    <div className='flex flex-col gap-3'>
                                        <Link to="/profile">
                                            <Button variant="ghost" className="w-full justify-start text-slate-600 hover:text-brand-600 hover:bg-brand-50">
                                                <User2Icon className="mr-2 h-4 w-4" /> View Profile
                                            </Button>
                                        </Link>
                                        <Button variant="ghost" onClick={logoutHandler} className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
                                            <LogOut className="mr-2 h-4 w-4" /> Logout
                                        </Button>
                                    </div>
                                </Popover.Content>
                            </Popover.Root>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;
