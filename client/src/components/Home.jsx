import React from 'react'
import Navbar from './Navbar'
import {Link} from 'react-router-dom' 
import bg from '../assets/solar.png'
const Home = () => {
  return (
    <div className=' bg-cover bg-center h-screen' style={{backgroundImage: `url(${bg})`}}>
     <Navbar/>
     <main className='text-right '>
     <div style ={{width: '750px', height:'400px',
     borderRadius: '25px', }} className=' float-left mt-10 ml-5 '>
     <p style={{fontSize:'40px'}} className='t  mr-9 mt-50  font-lexend-exa font-semibold text- mr-4'>Discover the power of solar</p>
     <p className='text-3xl mt-6 mr-6 text-left ml-8 leading-10'>
     In rooftops high,
 where sunlight lies, <br/>
We harness beams from azure skies.
A future bright, with every ray,<br/>
Sustainable, we pave the way.
     </p>
     <Link style={{height:'50px',width:'140px',fontSize:'18px',marginLeft:'30px',
     marginTop:'20px'}} className="btn mr-2  bg-pink-400  hover:bg-blue-200  font-bold float-left"to='/Feature'>Get Started</Link>
     </div>
     </main>
    </div>
  )
}

export default Home
