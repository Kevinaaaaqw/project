import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div>
          <NavLink to="/">Home</NavLink>
          {/* <a href='/'>Home</a><br/> 建議使用NavLink標籤原因見筆記(React) */}
          <NavLink to="/about/zzz">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
       </div>
    );  
}
 
export default Navigation;