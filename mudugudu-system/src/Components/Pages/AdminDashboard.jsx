import  { children, useState } from 'react'
import { MdMenu } from "react-icons/md";
import { Link, NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa'
import { IoNotificationsOutline } from "react-icons/io5";
import { RiGroupLine } from "react-icons/ri";
import { BsBarChartLineFill } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";

import { FaUserPlus } from "react-icons/fa";

 const AdminDashboard = ({children}) =>{
    const[isOpen, setIsOpen] = useState(false);
    const toggle = ()=>setIsOpen(!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"",
            icon:""
        },
        {
            path:"/register",
            name:"Register",
            icon:<FaUserPlus />
        },
        {
            path:"/announcement",
            name:"Announcement",
            icon:<IoNotificationsOutline/>
        },
        {
            path:"/users",
            name:"Users",
            icon:<FaUser/>
        },
        {
            path:"/citizen",
            name:"Citizen",
            icon: <RiGroupLine />

        },
        {
            path:"/generateReport",
            name:"Generate Report",
            icon: <BsBarChartLineFill />
        },
        
    ]

    //button js handler
    const handleLogout = () => {
        const confirmLogout = window.confirm('Are you sure you want to log out?');
    
        if (confirmLogout) {
          // Redirect to the login page
          window.location.href = '/Test';
           // Replace '/login' with your actual login page URL
        //   <Link to="/test">Go to Login Page</Link>
        }
        // If the user clicks "Cancel" in the confirmation dialog, do nothing
      };

      //button js handler ends here
    
  return (
    
    <div className='container'>
        <div className="sidebar">
            <div className="topsection">
                <h4 style={{display: isOpen ? "block" : "none"}}  className='logo'>  <img className='logodashboard' src="../logo2.png" alt="" /> </h4>
                <div   className="bars">
                <FaRegUser size={60} />
                </div>
            </div>
            {
                menuItem.map((item, index)=>(
                <NavLink to={item.path} key={index} className="link" activeclassname="active">
                    <div className="icon">{item.icon}</div>
                    <div  className="linktext">{item.name}</div>
                </NavLink>  
                ))
            }
            <div title='Log out of the system'><input type="button" value="Logout" className='logoutadmin' onClick={handleLogout}/></div>
        </div>
        
        <div className='rightside'><main>{children}</main></div>
        
    </div>
  )
}
export default AdminDashboard;
