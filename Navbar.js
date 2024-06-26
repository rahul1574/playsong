import React from 'react'
import{Link} from "react-router-dom";
export default function Navbar() {
  return (
    <>
    <div className="navbar">
       <div id="photo"></div>
       <Link  to="/power"><i id="three" class="fa-solid fa-power-off"></i></Link>
       <Link to="/home"><i id="four" class="fa-solid fa-house"></i></Link>
    </div>
    </>
  )
}
