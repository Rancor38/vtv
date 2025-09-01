import React from 'react'
import shardtechLogo from '../assets/shardtech.png'
import './Home.css'

function Home() {
  return (
    <div className="home-container">
      <table width="100%" border="0" cellPadding="0" cellSpacing="0">
        <tbody>
          <tr>
            <td bgcolor="#000080" height="80">
              <center>
                <font color="#FFFFFF" size="7" face="Arial">
                  <b>SHARDTECH CORPORATION</b>
                </font>
                <br />
                <font color="#FFFF00" size="3" face="Arial">
                  <i>Building Tomorrow's Technology Today™</i>
                </font>
              </center>
            </td>
          </tr>
        </tbody>
      </table>

      <table width="100%" border="0" cellPadding="10" bgcolor="#C0C0C0">
        <tbody>
          <tr>
            <td width="150" valign="top" bgcolor="#808080">
              <font face="Arial" size="3" color="#FFFFFF">
                <b>NAVIGATION</b>
              </font>
              <hr />
              <font face="Arial" size="2">
                <a href="#about">• About Us</a><br />
                <a href="#products">• Products</a><br />
                <a href="#solutions">• Solutions</a><br />
                <a href="#news">• News</a><br />
                <a href="#contact">• Contact</a><br />
                <br />
                <img src="https://web.archive.org/web/19961112012414im_/http://home.netscape.com/comprod/mirror/images/now8_bu.gif" alt="Netscape Now!" />
              </font>
            </td>
            <td valign="top" bgcolor="#FFFFFF">
              <center>
                <img src={shardtechLogo} alt="ShardTech Logo" width="200" />
                <br /><br />
                <table border="2" cellPadding="10" bgcolor="#FFFFCC">
                  <tbody>
                    <tr>
                      <td>
                        <center>
                          <font face="Times New Roman" size="4">
                            <b>Welcome to ShardTech Corporation</b>
                          </font>
                          <hr />
                          <font face="Arial" size="3">
                            Your trusted partner in advanced technology solutions since 1989
                          </font>
                        </center>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <br />
                
                <table width="90%" border="0">
                  <tbody>
                    <tr>
                      <td width="33%" align="center">
                        <img src="https://web.archive.org/web/19961219202222im_/http://www.microsoft.com/library/images/gifs/homepage/1ptrans.gif" width="80" height="80" alt="" style={{background: '#0000FF'}} />
                        <br />
                        <font face="Arial" size="2">
                          <b>INNOVATION</b><br />
                          Leading edge technology
                        </font>
                      </td>
                      <td width="33%" align="center">
                        <img src="https://web.archive.org/web/19961219202222im_/http://www.microsoft.com/library/images/gifs/homepage/1ptrans.gif" width="80" height="80" alt="" style={{background: '#00FF00'}} />
                        <br />
                        <font face="Arial" size="2">
                          <b>EXCELLENCE</b><br />
                          Quality guaranteed
                        </font>
                      </td>
                      <td width="33%" align="center">
                        <img src="https://web.archive.org/web/19961219202222im_/http://www.microsoft.com/library/images/gifs/homepage/1ptrans.gif" width="80" height="80" alt="" style={{background: '#FF0000'}} />
                        <br />
                        <font face="Arial" size="2">
                          <b>SERVICE</b><br />
                          24/7 Support
                        </font>
                      </td>
                    </tr>
                  </tbody>
                </table>
                
                <br />
                <hr width="80%" />
                <br />
                
                <table border="1" cellPadding="5" bgcolor="#E0E0E0">
                  <tbody>
                    <tr bgcolor="#000080">
                      <td colspan="2">
                        <center>
                          <font color="#FFFFFF" face="Arial" size="3">
                            <b>Latest News</b>
                          </font>
                        </center>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <font face="Arial" size="2">
                          <b>• NEW!</b> ShardTech announces PROJECT UNITY<br />
                          <b>• </b>Q3 earnings exceed expectations<br />
                          <b>• </b>New office opening in The Great City<br />
                        </font>
                      </td>
                    </tr>
                  </tbody>
                </table>
                
                <br />
                <marquee behavior="scroll" direction="left" scrollamount="3">
                  <font face="Arial" size="2" color="#0000FF">
                    ShardTech Corporation - Nasdaq: SHRD | Stock Price: $47.25 ▲ | 
                    Visit our offices worldwide | Equal Opportunity Employer
                  </font>
                </marquee>
              </center>
            </td>
            <td width="150" valign="top" bgcolor="#808080">
              <font face="Arial" size="3" color="#FFFFFF">
                <b>QUICK LINKS</b>
              </font>
              <hr />
              <font face="Arial" size="2">
                <a href="/invite">• Special Events</a><br />
                <a href="#">• Careers</a><br />
                <a href="#">• Investors</a><br />
                <a href="#">• Partners</a><br />
                <br />
                <center>
                  <img src="https://web.archive.org/web/19961220154114im_/http://www.microsoft.com/ie/images/ieget_animated.gif" alt="IE" width="88" height="31" />
                </center>
              </font>
            </td>
          </tr>
        </tbody>
      </table>
      
      <table width="100%" border="0" cellPadding="5" bgcolor="#000000">
        <tbody>
          <tr>
            <td>
              <center>
                <font face="Courier New" size="2" color="#00FF00">
                  Copyright © 1989-1999 ShardTech Corporation. All rights reserved.<br />
                  Best viewed with Netscape Navigator 3.0 or Microsoft Internet Explorer 3.0 at 800x600
                </font>
              </center>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Home
