import React from 'react'
import { Link } from 'react-router-dom'
import "./Footer.css"
function Footer() {
  return (
    <div className='footerContainer'>
      <div className="footer">
        <div className="teamMembers">
          <p className="bold">Team</p>
          <p>
            <Link to={"www.linkedin.com/in/aswnss"}>Aswin Lal M | SCT20AM020</Link>
          </p>
          <p>
            <Link to={"www.linkedin.com/in/aswnss"}>Bhagavath Mohan | SCT20AM025</Link>
          </p>
          <p>
            <Link to={"https://www.linkedin.com/in/hashir-bin-anwer-137503205/"}>Hashir Bin Anwer | SCT20AM035</Link>
          </p>
        </div>
        <div className="resources">
          <p className="bold">Resources</p>
          <Link to={'/'}>Github</Link>
        </div>
        <div className="quickLinks">
          <p className="bold">Quick Links</p>
          <p>Home</p>
          <p>About</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
