import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function footer() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return(
        <div className="fusion-footer">
          <footer className="fusion-footer-widget-area fusion-widget-area">
            <div className="fusion-row">
              <div className="fusion-columns fusion-columns-3 fusion-widget-area">
    
                <div className="fusion-column col-lg-4 col-md-4 col-sm-4">
                  <section id="text-2" className="fusion-footer-widget-column widget widget_text" style={{borderStyle: 'solid', borderColor: 'transparent', borderWidth: '0px'}}>
                    <div className="textwidget">
                      <p><img src="../../Capture.jpg" alt="logo_footer" width="160" height="86" className="" /></p>
                    </div>
                    <div style={{clear: 'both'}}></div>
                  </section>
                  <section id="text-3" className="fusion-footer-widget-column widget widget_text" style={{borderStyle: 'solid', borderColor: 'transparent', borderWidth: '0px'}}>
                    <h3 className="widget-title">Address:</h3>
                    <div className="textwidget">5 Pillars Cemetery<br />
                      1761 Laughlin Rd,<br />
                      Livermore, CA, 94551<br />
                      <br />
                      Phone: 510 517 8397 <br />
                      Phone: 510 793 2598 <br />
                      Email: <a href="mailto:info@5pillarscemetery.com">info@5pillarscemetery.com</a><br />
                    </div>
                    <div style={{clear: 'both'}}></div>
                  </section>
                </div>
    
                <div className="fusion-column fusion-column-last col-lg-4 col-md-4 col-sm-4">
                  <section id="text-19" className="fusion-footer-widget-column widget widget_text" style={{borderStyle: 'solid', borderColor: 'transparent', borderWidth: '0px'}}>
                    <h3 className="widget-title">Quick Links</h3>
                    <div className="textwidget">
                      <ul>
                        <li><a href="./Home2.html">About Us</a></li>
                        <li><a href="./Donations.js">Donations</a></li>
                        <li><a href="./Janaza.js">Organizing Janaza</a></li>
                        <li><a href="./NextSteps.js">Next Steps</a></li>
                        <li><a href="./Visiting.js" rel="noopener">Visiting Etiquette</a></li>
                      </ul>
                    </div>
                    <div style={{clear: 'both'}}></div>
                  </section>
                </div>
    
              </div>
            </div>
          </footer>
        </div>
      );
    }

    
    export default Footer;
    
                                    // export default NavBar;
