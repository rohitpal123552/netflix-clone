import React from 'react';
import "./Footer.css";

function Footer() {
    return (
        <div >
            <div className="footers">        
                <ul>
                    <li>Questions? Call 000-800-040-1843</li>
                </ul>
            </div>

            <div className="footer">
                <ul>
                    <a href="https://help.netflix.com/en/node/412"><li >FAQ</li></a>
                    <a href="https://ir.netflix.net/ir-overview/profile/default.aspx"><li>Investor Relations</li></a>
                    <a href="https://help.netflix.com/legal/privacy"><li>Privacy</li></a>
                    <a href="https://fast.com/"><li>Speed Test</li></a>
                
                        <select id="language">
                            <option>English</option>
                            <option>Hindi</option>
                        </select>
                    <li>Netflix India</li>
            </ul>
                <ul>
                    <a href="https://help.netflix.com/en/"><li>Help Centre</li></a> 
                    <a href="https://jobs.netflix.com/"> <li>Jobs</li></a> 
                    <a href="https://help.netflix.com/legal/privacy#cookies"> <li>Cookie Preferences</li></a>
                    <a href="https://help.netflix.com/legal/notices"> <li>Legal Notices</li></a> 
                        </ul>
                <ul>
                    <a href="https://www.netflix.com/in/login?nextpage=https%3A%2F%2Fwww.netflix.com%2Fyouraccount"> <li>Account</li></a> 
                    <a href="https://devices.netflix.com/en/"> <li>Ways to Watch</li></a>
                    <a href="https://help.netflix.com/legal/corpinfo"><li>Corporate Information</li></a>
                    <a href="https://www.netflix.com/in/browse/genre/839338"><li>Netflix Originals</li></a>  
                </ul>
                <ul>
                    <a href="https://media.netflix.com/en/"> <li>Media Centre</li></a>
                    <a href="https://help.netflix.com/legal/termsofuse"><li>Terms of Use</li></a> 
                    <a href="https://help.netflix.com/en/contactus"> <li>Contact Us</li></a>
                    
                </ul>
            </div>
    
        </div>
    )
}

export default Footer
