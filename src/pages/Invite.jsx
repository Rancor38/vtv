import React from 'react'
import shardtechLogo from '../assets/shardtech.png'

function Invite() {
  return (
    <div className="container">
      <table className="main-table header-table" border="3" cellPadding="10" cellSpacing="0">
        <tbody>
          <tr>
            <td bgcolor="#000080">
              <center>
                <font color="#FFFF00" size="6" face="Times New Roman">
                  <b>WELCOME TO SHARDTECH</b>
                </font>
              </center>
            </td>
          </tr>
        </tbody>
      </table>
      
      <br />
      
      <table className="main-table content-table" border="1" cellPadding="20" cellSpacing="0" bgcolor="#FFFFFF">
        <tbody>
          <tr>
            <td>
              <center>
                <font size="4" color="#FF0000" face="Arial">
                  <b><span className="blink">The Great City's Finest Minds</span></b>
                </font>
                <hr color="#000000" size="2" />
                <font size="3" face="Times New Roman">
                  <p>Thank you for joining us in this historic celebration of you!</p>
                  <p>Special thanks from <b>PROJECT UNITY</b></p>
                </font>
                <br />
                <table className="inner-table" border="2" cellPadding="8" bgcolor="#FFFF99">
                  <tbody>
                    <tr>
                      <td>
                        <center>
                          <font size="4" face="Arial" color="#000080">
                            <b>IMPORTANT:</b>
                          </font>
                          <br />
                          <font size="3" face="Times New Roman" color="#000000">
                            Please be seated at table <b><font size="4">THETA</font></b>
                          </font>
                        </center>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <br />
                <img src="https://web.archive.org/web/19961219202222im_/http://www.microsoft.com/library/images/gifs/homepage/1ptrans.gif" width="1" height="10" alt="" />
                <br />
                <img src={shardtechLogo} alt="ShardTech Logo" className="logo-img" />
                <br /><br />
                <font size="2" color="#0000FF">
                  <u>Click here to continue &gt;&gt;</u>
                </font>
              </center>
            </td>
          </tr>
        </tbody>
      </table>
      
      <br />
      
      <table className="main-table footer-table">
        <tbody>
          <tr>
            <td>
              <hr />
              <center>
                <font size="2" face="Courier New">
                  This page best viewed with Netscape Navigator 1.0<br />
                  © 1989 ShardTech Corporation - All Rights Reserved<br />
                </font>
              </center>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Invite
