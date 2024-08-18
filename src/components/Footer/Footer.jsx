import React from 'react'
import './Footer.css'
import logo from './../../assests/logo.gif'
import insta from './../../assests/insta.jpeg'
import face from './../../assests/face.jpeg'
import link from './../../assests/link.jpeg'
import gmail from './../../assests/gmail.jpeg'

function Footer() {
  return (
    <div className='footer'>
        <div className="top">
            <img src={logo} alt="" srcset="" className='logo'/>
            <div className="media-links">
                <ul className='social-list'>
                    <li><img src={insta} alt="" srcset="" className='social'/></li>
                    <li><img src={face} alt="" srcset="" className='social'/></li>
                    <li><img src={link} alt="" srcset="" className='social'/></li>
                    <li><img src={gmail} alt="" srcset="" className='social'/></li>
                </ul>
            </div>
        </div>
        <div className="bottom">
          <div className="col-md-3">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Statutory Committees</a></li>
              <li><a href="#">Webmail</a></li>
              <li><a href="#">Sitemap</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Portals</h4>
            <ul>
              <li><a href="#">Mumbai University</a></li>
              <li><a href="#">Directorate Of Technical Education</a></li>
              <li><a href="#">AICTE</a></li>
              <li><a href="#">NAAC</a></li>
              <li><a href="#">Shikshan Shulka Samiti</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Imp Links</h4>
            <ul>
              <li><a href="#">Mandatory Disclosure</a></li>
              <li><a href="#">Institute Memberships</a></li>
              <li><a href="#">GIT Social Accountability</a></li>
              <li><a href="#">College Prospectus</a></li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Contact</h4>
            <ul>
              <li>Gharda Institute Of Technology</li>
              <li>Landline: 02356 273134</li>
              <li>Registrar: 9422152788 Ext. 110</li>
              <li>Academics: 9822765402 Ext. 135</li>
              <li>Accounts: 9420376273 Ext. 133</li>
              <li>Exam: 7798312364 Ext. 159</li>
              <li>Email: principal@git-india.edu.in</li>
            </ul>
          </div>
        </div>
    </div>
  )


}

export default Footer