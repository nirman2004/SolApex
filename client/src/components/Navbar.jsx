import React from 'react'
import '../index.css'
import { Link, useLocation } from 'react-router-dom'
const Navbar = () => {
  const location = useLocation();
  const isAboutPage = location.pathname === '/About';
  const shouldHideSignin = location.pathname === '/Login';
  const navbarBgColor = isAboutPage ? 'bg-yellow-300' : 'bg-pink-300';
  return (
    
      <div className={`navbar ${navbarBgColor}  h-5`}>
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
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 h-50 p-2 shadow">
         <li className='mb-3'><a className='text-2xl'>Feature</a></li>
      <li className='mb-3'><Link className='text-2xl' to='./News'>News</Link></li>
      <li className='mb-3'><Link className='text-2xl' to='/About'>About Us</Link></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-3xl">SolApex</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a className='text-2xl'>Feature</a></li>
      <li><Link  className='text-2xl' to ='/News'>News</Link></li>
      <li><Link className='text-2xl' to='/About'>About-Us</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
   {!shouldHideSignin &&( <Link className="btn mr-2 bg-blue-300 hover:bg-pink-600 text-1xl font-bold" to='/Login'>Sign-in</Link>)}
  </div>
</div>
    
  )
}

export default Navbar
