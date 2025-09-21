import { NavLink } from "react-router-dom";
import logo from '../../assets/Logo.png';
const Navbar = () => {

    const links = <>
        <li className="text-base-300"><NavLink to={'/'}>Home</NavLink></li>
        <li className="text-base-300"><NavLink to={'/blog'}>Blog</NavLink></li>
        <li className="text-base-300"><NavLink to={'/statistics'}>Statistic</NavLink></li>
    </>

    return (
        <div className="container mx-auto sticky z-30 top-0 ">
            <div className="navbar bg-base-100 ">
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
                <div className="navbar-end">
                    <div className="w-10 mr-2">
                        <img
                            className="rounded-full"
                            alt="Tailwind CSS Navbar component"
                            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                    <a className="btn btn-primary hover:bg-[#1d553c]">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;