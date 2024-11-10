
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { FaInstagram } from "react-icons/fa"


const NavBar = () => {
  return (
   <nav className=" mb-20 flex item-center justify-between py-6 ">
<div className="flex flex-shrink-0 items-center">
<h1 className="mx-2 w-10 text-4xl">Ab</h1>

</div>

<div className="m-8 flex items-center justify-center gap-4 text-2xl">
<a href="https://www.linkedin.com/in/anubhav-bhatt-a15893204/" 
  target="_blank" 
  rel="noopener noreferrer"><FaLinkedin></FaLinkedin></a>


<a href="https://github.com/Anubhav-bhatt" 
  target="_blank" 
  rel="noopener noreferrer">
<FaGithub></FaGithub>
  </a>

<a href="https://www.instagram.com/anubhav_bhatt__?igsh=MTR5eGt2c3JtZXQxdg=="
 target="_blank" 
 rel="noopener noreferrer"><FaInstagram></FaInstagram></a>





</div>


   </nav>
  )
}

export default NavBar
