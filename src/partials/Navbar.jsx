import { Mail } from "lucide-react"
import { Box } from "lucide-react"
import { User } from "lucide-react"
import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
<div className="navbar bg-base-300">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl space-x-1">
      <div className="avatar">
        <div className="w-9 rounded-lg">
          <img src="towachibiseek.jpg" alt="" />
        </div>
      </div>
      <span>Aliyosa Kevin</span>
    </a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li>
       <NavLink to={'/'}>
       <User size="15" />
       <span>Profile</span>
       </NavLink>
      </li>
      <li>
       <NavLink to={'/project'}>
       <Box size="15" />
       <span>Project</span>
       </NavLink>
      </li>
      <li>
       <NavLink to={'/contact'}>
       <Mail size="15" />
       <span>Contact</span>
       </NavLink>
      </li>
    </ul>
  </div>
</div>
  )
}

export default Navbar
