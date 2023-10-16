// import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
// import { AuthContext } from "../../Providers/AuthProvider";


export default function Navbar() {


    // const { handleSignOut, user } = useContext(AuthContext)

    // const { wishlist, setWishlist, order, setOrder } = useContext(AuthContext)

    // console.log(wishlist);
    // console.log(order);

    // const isEmpty = (list) => {
    //     if (list.length == 0) return true;
    //     else return false;
    // }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Item 1</a></li>
                            <li>
                                <a>Parent</a>
                                <ul className="p-2">
                                    <li><a>Submenu 1</a></li>
                                    <li><a>Submenu 2</a></li>
                                </ul>
                            </li>
                            <li><a>Item 3</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        <li><NavLink to={'/users'}>Users</NavLink></li>
                        <li><NavLink to={'/signup'}>Sign Up</NavLink></li>
                        <li><NavLink to={'/signin'}>Sign In</NavLink></li>
                        
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Button</a>
                </div>
            </div>
        </div>
    )
}
