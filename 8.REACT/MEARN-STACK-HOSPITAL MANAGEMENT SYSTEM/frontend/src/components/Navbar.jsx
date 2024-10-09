// eslint-disable-next-line no-unused-vars
import React,{useState,useContext} from 'react'
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
//import Context from '../main'

const Navbar=() =>{

  const [show, setShow] = useState(false);
  //const { isAuthenticated } = useContext(Context);

  return (
    <>
   <nav className={"container"}>
   <div className="logo">
      <img src="/logo.png" alt="logo" className="logo-img" />
    </div>
    <div className={show ? "navLinks showmenu" : "navLinks"}>
       <div className="links">
       <Link to={"/"} onClick={() => setShow(!show)}>
              Home
            </Link>
            <Link to={"/appointment"} onClick={() => setShow(!show)}>
              Appointment
            </Link>
            <Link to={"/about"} onClick={() => setShow(!show)}>
              About Us
            </Link>
            <button className="loginBtn btn" style={{ width: '100px', height: '30px', fontSize: '12px', padding: '5px' }}> 
              Login
            </button>
       </div>
       {/* {isAuthenticated ? (
            <button className="logoutBtn btn" >
              LOGOUT
            </button>
          ) : (
            <button className="loginBtn btn" >
              LOGIN
            </button>
          )} */}
      </div>
      
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
    </nav>
  </>
  );
};

     
export default Navbar;