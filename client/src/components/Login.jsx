import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import bg from '../assets/solar.png'
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
  };
  return (
    <div className=' bg-cover bg-center h-screen' style={{backgroundImage: `url(${bg})`}}>
      <Navbar/>
      <main className='flex justify-center'>
        <div >
        
        <div style={{height:'500px',width:'500px',backgroundColor: 'rgba(255,255,255,0.4)', boxShadow:'10px 10px 10px rgba(2, 0, 0, 0.8)',borderRadius:'25px',
        marginTop:'80px',flexDirection:'column'}} className='flex items-center'>
        <p className='text-3xl  font-bold mt-20 font-lexend-exa'>
          Login
        </p>
          <form action="">
      <div>
      <input style={{border:'none', background:'transparent', height:'30px', borderBottom:'2px solid black',marginTop:'60px'}} className='w-full' type="email" />
      <label className='text-black ' htmlFor=''>Your Email</label>
      </div>
      <div>
      <input style={{border:'none', background:'transparent', height:'30px', borderBottom:'2px solid black',marginTop:'20px'}} className = 'w-full' type={showPassword ?'text' : 'password'} />
      <label className='text-black ' htmlFor=''>Your Password</label>
      </div>
      <div>
            <input className="h-3 w-3" type="checkbox" name="" id="showPasswordCheckbox" 
              onChange={togglePasswordVisibility}
            />
            <label style={{paddingLeft: '4px'}} className='text-black ' htmlFor="">Show Password</label>
          </div>
          <button style={{background:'pink',width:'60%', marginTop:'10px',
          marginLeft:'60px',
          marginBottom:'17px',
          borderRadius:'25px',
          border:'2px solid black',
          boxShadow:'10px 10px 10px rgba(2, 0, 0, 0.7)',
          paddingBottom:'2px'
          }} className=' h-10 text-2xl font-bold'>
            Log in
          </button>
          <div className='text-black '>Forgot Password?</div>
          <div>
            <span className='text-black'>New Here? </span><span className='text-black'><Link to ='/Register'>Create an account</Link></span>
          </div>
          </form>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Login
