import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/Logo.png';
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { toast } from "react-toastify";
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => {
                toast.error('you logged Out ', {
                    zIndex: 9999,
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    // transition: Bounce,
                })
            })
            .catch((error) => {
                toast.error(error, {
                    zIndex: 9999,
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    // transition: Bounce,
                });
            })
    }

    const links = <>
        <li className="text-base-300"><NavLink to={'/'}>Home</NavLink></li>
        <li className="text-base-300"><NavLink to={'/blog'}>Blog</NavLink></li>
        {
            user ?
                <li className="text-base-300"><NavLink to={'/appliedJobs'}>Applied Jobs</NavLink></li>
                :
                <></>
        }
    </>

    return (
        <div className="container mx-auto sticky z-30 top-0 shadow-sm ">
            <div className="navbar bg-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <img className="w-[160px]" src={logo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end space-x-2.5">
                    <div className="w-10 mr-2">
                        <Link to={'/profile'}>
                            <img
                                className="rounded-full"
                                alt=""
                                src={user && user.photoURL}
                            />
                        </Link>
                    </div>
                    {/* <Link to={'/auth/register'} className="btn btn-primary hover:bg-[#1d553c]">Register</Link> */}
                    {
                        user
                            ? <button onClick={handleLogOut} className="btn btn-primary hover:bg-[#1d553c]">Log Out</button>
                            : <Link to={'/auth/login'} className="btn btn-primary hover:bg-[#1d553c]">Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;