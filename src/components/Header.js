import React from 'react'
import {Webimage1} from "./img/weimg"
import {Link} from "react-router-dom"
import './public/Header.css'
const Navbar = (props) => {
    const {user} =props

  return (
    <div className='n'>
        <nav>
<div className="c">
 <Link to ="/">  
<Webimage1/>
</Link> 
<h3>Better Buy</h3>
<p>About Us</p>

<input id="searchbar" type="text"
name="search" placeholder="   Search for shoes...">

</input>


</div>
<div className='login1'>

<Link to="/login">
<h3>Logout</h3>
</Link>
</div>
</nav>
</div> 
  )
}

export default Navbar