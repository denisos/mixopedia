import './Footer.css';

function Footer() {
    return (
      <footer className="">
        <nav className="footer-nav">
          <div className="products footer-column">
            <h3 className="">Product</h3>
            <div className="">
              <div className="">
                <a href="/customer-research">Customer Research</a>
              </div>
              <div className="">
                <a href="/cool-tools">Cool Tools</a>
              </div>
              <div className="">
                <a href="/regulator">Compliance</a>
              </div>
              <div className="">
                <a href="/pricing">Pricing</a>
              </div>
              <div className="">
                <a href="/demo">Request a Demo</a>
              </div>
            </div>
          </div>

          <div className="about footer-column">
            <h3 className="">About Us</h3>
            <div className="">
              <div className=""><a href="/about">About us</a></div>
              <div className=""><a href="/faqs">FAQs</a></div>
              <div className=""><a href="/careers">Careers</a></div>
              <div className=""><a href="/contact">Contact Us</a></div>
            </div>
          </div>

          <div className="about footer-column">
            <h3 className="">Download our app</h3>
            <p>Its awesome</p>
            <div className="">
              <p>Follow us</p>
              <a className="" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="oJkDVXcDrqf0jc0tteH0z _27U_nE4kH4gsWiXa19--Xx"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
        </nav>

        <div className="footer-copyright">
          <div className="">
            <a href="https://goo.gl/maps" target="_blank" rel="noopener noreferrer">
              <div className="_2D4QQdbvH9C1gGDgnn04hv">Ocean Beach, San Francisco, CA 94104</div>
            </a>
          </div>
          <div>© mixopedia, Inc.</div>
        </div>

      </footer>
    )
  }
  
export default Footer;
