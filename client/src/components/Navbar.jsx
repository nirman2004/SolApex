import React from 'react'
import '../index.css'
import { Link, useLocation } from 'react-router-dom'
const Navbar = () => {
  const location = useLocation();
  const shouldHideSignin = location.pathname === '/Login'
  return (
  <div className="navbar bg-pink-300">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 h-55 p-2 shadow">
         <li className='mb-3'><a className='text-2xl'>Feature</a></li>
      <li className='mb-3'><Link className='text-2xl' to='./News'>News</Link></li>
      <li className='mb-3'><a className='text-2xl'>About Us</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-3xl">SolApex</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/Feature' className='text-2xl'>Feature</Link></li>
      <li><Link  className='text-2xl' to ='/News'>News</Link></li>
      <li><a className='text-2xl'>About-Us</a></li>
    </ul>
  </div>
  <div className="navbar-end">
   {!shouldHideSignin &&( <Link className="btn mr-2 bg-blue-300 hover:bg-pink-600 text-1xl font-bold" to='/Login'>Sign-in</Link>)}
  </div>
</div>
    
  )
}

export default Navbar
