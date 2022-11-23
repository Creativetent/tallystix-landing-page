import React from 'react';

function Footer() {
    return (
<div>
  <div className="footer-main">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-12 m-md-auto align-self-center">
          <div className="block">
            <a href="index.html"><img src="images/logo-alt.png" alt="footer-logo" /></a>
            
            <ul className="social-icon list-inline">
              <li className="list-inline-item">
                <a href="https://www.facebook.com/"><i className="ti-facebook"></i></a>
              </li>
              <li className="list-inline-item">
                <a href="https://twitter.com/"><i className="ti-twitter"></i></a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.instagram.com/"><i className="ti-instagram"></i></a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="col-lg-2 col-md-3 col-6 mt-5 mt-lg-0">
          <div className="block-2">
            <ul>
              <li><a href="about.html">About</a></li>
              <li><a href="contact.html">Contact</a></li>
              <li><a href="team.html">Team</a></li>
              <li><a href="faq.html">FAQ</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="text-center bg-dark py-4">
    <div className="text-secondary">Copyright &copy; <script>document.write(new Date().getFullYear())</script>. Designed &amp; Developed by <a href="https://">Rogue Reality</a>
  </div>
</div>
  
</div>
    );
}

export default Footer;