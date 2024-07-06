
import Navbar from './Navbar'
import bG from '../assets/solar3.png'
import Bg from '../assets/solar2.png'
import { FaLinkedin , FaGithub, FaInstagram, FaArrowCircleRight} from "react-icons/fa";
const About = () => {
  return (
    <div className='bg-green-100 h-screen'>
     <Navbar/>
     <div style={{backgroundImage: `url(${bG})`}} className=' flex h-1/2 bg-center bg-cover items-center text-center justify-center'>
    <div style= {{backgroundColor: 'rgba(255,255,0,0.1)',height:'150px',width:'780px',boxShadow:'10px 10px 10px rgba(2, 0, 0, 0.8'}}>
      <p className='text-4xl pt-7 font-bold text-black'>IF SUNBEAMS WERE WEAPONS OF WAR,<br /> WE WOULD HAVE HAD SOLAR ENERGY CENTURIES AGO.</p>
      </div>
     </div>
     <div style={{background:`url(${Bg})`, height:'280px',
     backgroundPosition:'center',}} className= ' bg-cover' >
     
      <p className='text-center text-3xl font-bold text-black'>ABOUT US</p>
      <p style={{color:'black',fontSize:'20px',paddingLeft:'40px',paddingRight:'50px',
      fontWeight:'600',
      paddingTop:'10px'}}>We are dedicated to harnessing solar energy to create a sustainable future. Our mission is to provide innovative solutions that empower individuals and businesses to adopt clean and renewable energy sources.Through advanced technology and user-friendly tools, we strive to make solar energy accessible, efficient, and impactful for communities worldwide. Join us in shaping a brighter tomorrow with every ray of sunlight</p><div style={{marginTop:'15px',
      marginLeft:'40px',
       display:'flex'
      }} ><a className='bg-yellow-400' style={{fontSize:'22px',cursor:'pointer', paddingLeft:'',
      marginTop:'10px',fontWeight:'bold',textAlign:'center',
     border:'2px solid black',
     boxShadow:'10px 10px 0px rgba(2, 0, 0, 0.8)',
     flexDirection:'row'
     
      }}>Contact-Us</a>
          <p style={{fontSize:'30px',color:'red',paddingLeft:'20px',paddingTop:'30px'}} href=""><FaArrowCircleRight /></p>
        <a style={{fontSize:'30px',paddingLeft:'40px',paddingTop:'30px'}} href=""><FaLinkedin /></a>
        <a style={{fontSize:'30px',paddingLeft:'20px',paddingTop:'30px'}} href=""><FaGithub /></a>
        <a style={{fontSize:'30px',paddingLeft:'20px',paddingTop:'30px'}} href=""><FaInstagram /></a>
    
        
      </div>
     </div>
    
     </div>
   
  )
}

export default About

